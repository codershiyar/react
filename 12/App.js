import  "./App.css";
const programmingLanguages = ['JavaScript','PHP','Python','Java','C++'];
const products = [
  { name: 'هاتف ذكي', price: 2000, category: 'التكنولوجيا' },
  { name: 'كتاب', price: 50, category: 'الثقافة' },
  { name: 'حذاء رياضي', price: 300, category: 'الموضة' },
  { name: 'أداة مطبخ', price: 100, category: 'الطبخ' },
];
const hobbies = ['القراءة', 'الرسم', 'السفر', 'الطبخ','الموسيقى','الرياضة','التخييم', 'التصوير'];

function App() {
  let listItems = programmingLanguages.map(language=> <li>{language}</li>);
  let productItems = products.map(product=> 
  <article>
    <h2>{product.name}</h2>
    <p>{product.category} : {product.price}</p>
  </article>
  )

  return (
    <>
    <header>مرحبا يا حلوين </header>
    {listItems.length>0?  <ol>{listItems}</ol>: <div>لا يوجد محتوى</div>}
    {productItems.length>0?  productItems: ""}
    </>
  );
}

export default App;












