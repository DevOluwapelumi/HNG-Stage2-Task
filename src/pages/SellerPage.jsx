import { useState } from 'react';
import { BsStarFill, BsStarHalf, BsStar, BsPlus, BsDash } from 'react-icons/bs';
import Header from '../components/Header';
import Footer from '../components/Footer';
import image4 from '../assets/product1.png'; 
import image5 from '../assets/product2.png'; 
import image6 from '../assets/product3.png'; 
import image7 from '../assets/product4.png'; 
import image8 from '../assets/shirt2.png'; 
import image9 from '../assets/shirt.png'; 

const SellerPage = () => {

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const reviews = [
    {
      name: 'Samantha',
      rating: 5,
      review: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to shirt."',
    },
    {
      name: 'Alex',
      rating: 4.5,
      review: '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, Im quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
    },
    {
      name: 'Brian',
      rating: 4,
      review: '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designers touch in every aspect of this shirt."',
    },
    {
      name: 'Olivia',
      rating: 5,
      review: '"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. Its evident that the designer poured their creativity into making this t-shirt stand out."',
    },
    {
      name: 'Liam',
      rating: 4,
      review: '"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designers skill. Its like wearing a piece of art that reflects my passion for both design and fashion."',
    },
    {
      name: 'Jack',
      rating: 4.5,
      review: '"Im not just wearing a t-shirt; Im wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."',
    },
  ];

  const relatedProducts = [
    { name: 'Polo with Contrast Trim', price: '$22', img: image4 },
    { name: 'Gradient Graphic T-shirt', price: '$28', img: image5 },
    { name: 'Polo with Tipping Details', price: '$30', img: image6 },
    { name: 'Black Striped T-shirt', price: '$26', img: image7 },
  ];

  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <section className="bg-white p-4 shadow-md rounded-md">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <img src={image9} alt="Product" className=" h-auto" />
              <div className="flex space-x-2 mt-4">
                <img src={image8} alt="Product" className="w-16 h-16" />
                <img src={image8} alt="Product" className="w-16 h-16" />
                <img src={image8} alt="Product" className="w-16 h-16" />
                <img src={image8} alt="Product" className="w-16 h-16" />
              </div>
            </div>
            <div className="flex-1 p-4">
              <h2 className="text-3xl font-bold">One Life Graphic T-shirt</h2>
              <div className="flex items-center mt-2">
                <BsStarFill className="text-yellow-400" />
                <BsStarFill className="text-yellow-400" />
                <BsStarFill className="text-yellow-400" />
                <BsStarFill className="text-yellow-400" />
                <BsStarHalf className="text-yellow-400" />
                <span className="text-gray-600 ml-2">(4.5)</span>
              </div>
              <p className="text-xl text-gray-600 line-through">$300</p>
              <p className="text-2xl text-purple-700">$250</p>
              <div className="flex items-center mt-4">
                <div className="flex items-center space-x-2">
                  <button onClick={handleDecrement} className="bg-gray-200 p-2 rounded-md"><BsDash /></button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrement} className="bg-gray-200 p-2 rounded-md"><BsPlus /></button>
                </div>
                <button className="bg-purple-700 text-white py-2 px-4 rounded-md ml-4">Add to Cart</button>
                <button className="bg-gray-200 py-2 px-4 rounded-md ml-2">Wishlist</button>
              </div>
              <div className="mt-4">
                <h3 className="font-bold">Product Details</h3>
                <p>Comfortable and stylish graphic T-shirt. Made from high-quality materials.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mt-8">
          <h3 className="text-2xl font-bold">Ratings & Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-md">
                <h4 className="font-bold">{review.name}</h4>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((star, i) => (
                    <BsStarFill
                      key={i}
                      className={i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                  {review.rating % 1 !== 0 && <BsStarHalf className="text-yellow-400" />}
                  {review.rating < 5 && [...Array(5 - Math.ceil(review.rating))].map((_, i) => (
                    <BsStar key={i} className="text-gray-300" />
                  ))}
                </div>
                <p className="mt-2">{review.review}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Products */}
        <section className="mt-8">
          <h3 className="text-2xl font-bold">You might also like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-md">
                <img src={product.img} alt={product.name} className="w-full h-auto" />
                <h4 className="font-bold">{product.name}</h4>
                <p className="text-purple-700">{product.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-purple-700 text-white p-4 mt-8">
          <h3 className="text-xl font-bold">Stay up to date about our latest offers</h3>
          <form className="mt-4 flex">
            <input type="email" placeholder="Your email" className="p-2 rounded-md flex-1" />
            <button type="submit" className="bg-white text-purple-700 py-2 px-4 rounded-md ml-2">Subscribe</button>
          </form>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default SellerPage;
