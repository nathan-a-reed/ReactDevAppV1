import { useState, useEffect } from 'react';
import { useConversation } from '@elevenlabs/react';
import { Mic, MicOff, X, Loader2 } from 'lucide-react';

interface VoiceChatProps {
    agentId: string;
}

const VoiceChat: React.FC<VoiceChatProps> = ({ agentId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [conversationId, setConversationId] = useState<string | null>(null);

    const conversation = useConversation({
        onConnect: () => {
            console.log('Connected to ElevenLabs agent');
            setIsLoading(false);
        },
        onDisconnect: () => {
            console.log('Disconnected from ElevenLabs agent');
            setConversationId(null);
        },
        onMessage: (message) => {
            console.log('Message received:', message);
        },
        onError: (error) => {
            console.error('Conversation error:', error);
            setError('Connection error occurred');
            setIsLoading(false);
        }
    });

    // Check microphone permission on mount
    useEffect(() => {
        if (navigator.mediaDevices /*&& navigator.mediaDevices.getUserMedia*/) {
            navigator.permissions?.query({ name: 'microphone' as PermissionName })
                .then((result) => {
                    setMicPermission(result.state as 'granted' | 'denied' | 'prompt');
                })
                .catch(() => {
                    setMicPermission('prompt');
                });
        }
    }, []);

    const handleMicButtonClick = () => {
        setIsOpen(true);
        setError(null);
    };

    const requestMicrophoneAccess = async () => {
        try {
            setIsLoading(true);
            await navigator.mediaDevices.getUserMedia({ audio: true });
            setMicPermission('granted');
            return true;
        } catch (error) {
            console.error('Microphone access denied:', error);
            setMicPermission('denied');
            setError('Microphone access is required for voice chat');
            setIsLoading(false);
            return false;
        }
    };

    const startConversation = async () => {
        try {
            setIsLoading(true);
            setError(null);

            if (micPermission !== 'granted') {
                const accessGranted = await requestMicrophoneAccess();
                if (!accessGranted) return;
            }

            const id = await conversation.startSession({
                agentId: agentId,
                connectionType: 'webrtc',
            });

            setConversationId(id);
        } catch (error) {
            console.error('Failed to start conversation:', error);
            setError('Failed to connect to voice agent');
            setIsLoading(false);
        }
    };

    const endConversation = async () => {
        try {
            await conversation.endSession();
            setConversationId(null);
            setIsOpen(false);
        } catch (error) {
            console.error('Failed to end conversation:', error);
        }
    };

    const closePopup = () => {
        if (conversationId) {
            endConversation();
        } else {
            setIsOpen(false);
        }
        setError(null);
    };

    return (
        <>
            {/* Floating Voice Chat Button */}
            <button
                onClick={handleMicButtonClick}
                className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-50 flex items-center justify-center group"
                aria-label="Open voice chat"
            >
                <Mic className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Popup Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
                            <h3 className="text-white font-semibold text-lg">Voice Assistant</h3>
                            <button
                                onClick={closePopup}
                                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors duration-200"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {!conversationId ? (
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                                        <Mic className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>

                                    {error ? (
                                        <div className="text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900 dark:bg-opacity-20 p-3 rounded-lg">
                                            {error}
                                        </div>
                                    ) : (
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                Voice Chat Ready
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                                This feature requires microphone access to communicate with our AI voice assistant.
                                            </p>
                                        </div>
                                    )}

                                    <button
                                        onClick={startConversation}
                                        disabled={isLoading}
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Connecting...
                                            </>
                                        ) : (
                                            <>
                                                <Mic className="w-4 h-4" />
                                                Start Voice Chat
                                            </>
                                        )}
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900 dark:bg-opacity-20 rounded-full flex items-center justify-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${conversation.isSpeaking ? 'bg-red-500 animate-pulse' : 'bg-green-500'
                                            }`}>
                                            {conversation.isSpeaking ? (
                                                <MicOff className="w-4 h-4 text-white" />
                                            ) : (
                                                <Mic className="w-4 h-4 text-white" />
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                            {conversation.isSpeaking ? 'Assistant is speaking...' : 'Listening...'}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Status: {conversation.status}
                                        </p>
                                    </div>

                                    <button
                                        onClick={endConversation}
                                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                                    >
                                        <MicOff className="w-4 h-4" />
                                        End Conversation
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VoiceChat;