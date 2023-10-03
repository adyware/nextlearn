import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <nav style={{ padding: 16, margin: 8 }}>
                <Link href="/" style={{ padding: "0 10px 0 0" }}>Beranda</Link>
                <Link href="/indeks" style={{ padding: "0 10px 0 0" }}>Indeks</Link>
                <Link href="/indeks-csr" style={{ padding: "0 10px 0 0" }}>Indeks CSR</Link>
                <a href="/indeks-csr" style={{ padding: "0 10px 0 0" }}>Indeks CSR not next link</a>
            </nav>
        </>
    )
}

export default Navbar