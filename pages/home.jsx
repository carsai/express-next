import Link from 'next/link';

export default function() {
    return(
        <div>
            <h1>Home</h1>
            <Link href="/mixto">
                <button>Ir a mixto</button>
            </Link>
        </div>
    );
}