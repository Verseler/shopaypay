export default function ProductCard(props) {
  return(
    <div className='text-primary'>
      <div className='container mb-3'>
        <img className='object-cover w-full h-56' src={props.img} />
      </div>
      <h2 className='text-xs font-semibold text-gray-400'>{props.category}</h2>
      <h3 className='mt-3 text-sm font-bold truncate'>{props.name}</h3>
      <span className='block mt-1 mb-3 font-medium'>$ {props.price} USD</span>
      <div className='px-1'><button className='w-full p-[6px] font-bold text-white cursor-pointer rounded-3xl bg-primary'>Add to cart</button></div>
    </div>
  );
}