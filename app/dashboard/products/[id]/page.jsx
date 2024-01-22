import Styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
const SingleProductPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.infoContainer}>
        <div className={Styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        iPhone
      </div>
      <div className={Styles.formContainer}>
        <form action="" className={Styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="JohnDoe@example.com" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="New York" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
