export default function Newsletter() {
  return (
    <section className="py-20 text-center bg-secondary">
      <div className="primary-container">
        <h2 className="text-4xl font-semibold md:text-5xl text-primary">Let&apos;s stay in touch!</h2>
        <p className="max-w-3xl m-auto mt-8 mb-10 text-2xl text-primary">
          Subscribe to our newsletter. Get $10 off voucher your first purchase, exclusive
          offers and outdoor tips, trips, and education
        </p>
        <form className="flex flex-wrap m-auto max-w-max shadow-[0px_0px_2px_0px_#00000024]">
          <input className="flex-1 px-5 py-3 w-[325px] min-w-[125px] cursor-pointer"  type="email" placeholder="Your e-mail" required/>
          <input className="w-full px-5 py-3 font-bold text-white cursor-pointer 1xs:w-min bg-primary"  type="submit" value="Get $10 savings" />
        </form>
      </div>
    </section>
  );
}
