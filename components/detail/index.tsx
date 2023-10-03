export default function Detail({detailData}: any) {
    return (
        <>
            <h1>Produk: {detailData.title}</h1>
            <img src={detailData.thumbnail} alt={detailData.title} width={400} height={400} />
            <p>Merk: {detailData.brand}</p>
            <p>Seri: {detailData.title}</p>
            <p>Kategori: {detailData.category}</p>
            <p>Rating: {detailData.rating}</p>
            <p>Stock: {detailData.stock}</p>
            <p>Harga: {detailData.price}</p>
            <p>Deskripsi: {detailData.description}</p>
        </>
    ) 
}