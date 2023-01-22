import 당근_피칸_케이크 from '/images/cake/당근_피칸_케이크.jpeg';

const ProductDetailPage = () => (
  <div className="product-detail-container">
    <div className="flex-col-center w-520">
      <img className="w-480 h-480 mb-10" src={당근_피칸_케이크} alt="PET보틀-정사각(420ml)" />
      <div className="product-detail-info">
        <span className="product-detail-info__name">PET보틀-정사각(420ml)</span>
        <hr className="divide-line-gray my-20" />
        <div className="flex justify-between">
          <span>금액</span>
          <span className="product-detail-info__price">43,000원</span>
        </div>
      </div>
      <button className="product-detail-button flex-center mt-20">장바구니</button>
    </div>
  </div>
);

export default ProductDetailPage;
