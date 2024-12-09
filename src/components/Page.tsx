import NewsList from './news/NewsList.tsx';
import Promo from "./Promo.tsx";
import Search from './Search.tsx';
import Widgets from "./widgets/Widgets.tsx";

function Page() {
  return (
    <div className="page">
      <NewsList />
      <Search />
      <Promo
        alt=""
        src="https://img.freepik.com/premium-vector/draw-banner-cute-cat-say-hi-so-funny_45130-596.jpg?w=1380"
      />
      <Widgets />
    </div>
  )
}

export default Page;