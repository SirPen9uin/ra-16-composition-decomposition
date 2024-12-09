/**
 * Компонент Promo
 */

function Promo({ alt, src }: { alt: string; src: string }) {
    return <img alt={alt} className="promo" src={src} />
  }
  
  export default Promo;