
interface HeartButtonProps {
    text?: string;
}

function HeartButton({ text = "Me interesa" }: HeartButtonProps) {
    return (
        <div className="relative inline-block transition-transform duration-300 ease-in-out hover:scale-95">
            <div className="bg-black text-white rounded-xl px-8 py-4 flex items-center gap-4 border-2 border-white shadow-[3.38px_3.38px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-base font-medium whitespace-nowrap">{text}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10L16 10M16 10L11 5M16 10L11 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}

export default HeartButton;
