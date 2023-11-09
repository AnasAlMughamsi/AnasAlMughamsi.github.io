import "./ProductPreviewCard.scss"
import imgDesktop from "../../../challenges_guide/product-preview-card-component-main/images/image-product-desktop.jpg"
// import imgMobile from "../../../challenges_guide/product-preview-card-component-main/images/image-product-mobile.jpg"
import CartIcon from "../../../challenges_guide/product-preview-card-component-main/images/icon-cart.svg"

const ProductPreviewCard = () => {
  return (
    <div className='max-auto bg-white rounded-[12px] md:flex md:max-w-2xl md:w-[600px] w-[300px] shadow-md overflow-hidden'>
      <aside className='w-1/2rounded-[7px] flex flex-col justify-center'>
        <img className='h-48 w-full object-cover md:h-full md:w-[300px]' src={imgDesktop} 
          alt="product-img" />
      </aside>
      
      <div className='md:w-1/2 flex px-5 py-3 text-left'>
        <aside className='text-black flex flex-col md:gap-10 gap-3'>
          <div className="md:text-l text-sm text-dark-grayish-blue font-montserrat uppercase tracking-[0.25rem] relative md:top-4">prefume</div>
          <div className="font-fraunces font-extrabold md:text-[30px] text-[26px] leading-7">Gabrielle Essence Eaw De Parfum</div>
          <div>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
            Perfumer-Creator for the House of CHANEL.
          </div>
          <div className="font-fraunces flex items-center gap-5">
            <p className="text-dark-cyan text-[25px] font-extrabold ">$149.99</p>
            <p className="line-through">$169.99</p>
          </div>
          <div className="flex justify-center items-center ">
            <button className="bg-dark-cyan text-white px-[3.5rem] flex justify-center items-center gap-3 btn"> 
              <img src={CartIcon} width={14}/> Add to Card
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default ProductPreviewCard