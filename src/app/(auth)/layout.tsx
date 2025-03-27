export default function AuthLayout({ children }: {
    readonly children: React.ReactNode;
}) {
    return (
        <div className="flex justify-center">
            {children}
        </div>
    );
}
