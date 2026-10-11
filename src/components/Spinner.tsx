import React from 'react';

export interface SpinnerProps {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    variant?: 'circular' | 'crescent';
    className?: string;
    style?: React.CSSProperties;
}

/**
 * Ionic-style Spinner matching vsnectar.web.app
 * Defaults to the Material Design circular expanding/contracting arc spinner.
 */
export const Spinner: React.FC<SpinnerProps> = ({
    size = 28,
    color = 'currentColor',
    strokeWidth = 5.2,
    variant = 'circular',
    className = '',
    style = {}
}) => {
    const dimension = typeof size === 'number' ? `${size}px` : size;

    return (
        <div
            className={`vs-spinner-container ${className}`}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: dimension,
                height: dimension,
                color,
                flexShrink: 0,
                ...style
            }}
            role="status"
            aria-label="Loading"
        >
            {variant === 'circular' ? (
                <svg
                    viewBox="0 0 64 64"
                    style={{
                        width: '100%',
                        height: '100%',
                        animation: 'vs-spinner-circular-rotate 1.4s linear infinite',
                        transformOrigin: 'center center'
                    }}
                >
                    <circle
                        cx="32"
                        cy="32"
                        r="26"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        style={{
                            animation: 'vs-spinner-circular-inner 1.4s ease-in-out infinite',
                            strokeDasharray: '80px, 200px',
                            strokeDashoffset: '0px'
                        }}
                    />
                </svg>
            ) : (
                <svg
                    viewBox="0 0 64 64"
                    style={{
                        width: '100%',
                        height: '100%',
                        animation: 'vs-spinner-crescent-rotate 0.9s linear infinite',
                        transformOrigin: 'center center'
                    }}
                >
                    <circle
                        cx="32"
                        cy="32"
                        r="26"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray="128px"
                        strokeDashoffset="82px"
                    />
                </svg>
            )}

            <style>{`
                @keyframes vs-spinner-circular-rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes vs-spinner-circular-inner {
                    0% {
                        stroke-dasharray: 1px, 200px;
                        stroke-dashoffset: 0px;
                    }
                    50% {
                        stroke-dasharray: 100px, 200px;
                        stroke-dashoffset: -15px;
                    }
                    100% {
                        stroke-dasharray: 100px, 200px;
                        stroke-dashoffset: -125px;
                    }
                }

                @keyframes vs-spinner-crescent-rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Spinner;
