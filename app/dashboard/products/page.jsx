import Search from "../../ui/dashboard/search/search";
import Styles from "../../ui/dashboard/products/products.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchProducts } from "../../lib/data";
const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { products, count } = await fetchProducts(q, page);

  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <Search placeholder="Search for a Product..." />
        <Link href="/dashboard/products/add">
          <button className={Styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td key={product.id}>
                <div className={Styles.product}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={Styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().splice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={Styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${Styles.button} ${Styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${Styles.button} ${Styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;
