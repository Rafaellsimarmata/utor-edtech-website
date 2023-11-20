import MateriCard from "../../components/materiCard";
import "./style.css"

export default function ProfilePage() {
  return (
    <main className=' bg-black text-9xl'>
      <section className="container-top">
        <img className="img-profile" src="https://th.bing.com/th?id=OIP.u2UEX9aRsW4Hv4_1k5e23QHaDT&w=349&h=156&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2"/>
        <h3>pael ganteng</h3>
        <p>
          Create React App does not support custom PostCSS configurations and is incompatible with many important tools in the PostCSS ecosystem, like `postcss-import`.
          We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App. They provide an equivalent or better developer experience but with more flexibility, giving you more control over how Tailwind and PostCSS are configured.
        </p>
        <div className="sosmed-container">
          <a className="sosmed-icon"></a>
          <a className="sosmed-icon"></a>
          <a className="sosmed-icon"></a>
          <a className="sosmed-icon"></a>
        </div>
        <div className="button container">
          <button>button</button>
          <button>button</button>
        </div>
      </section>
      <section className="container-bot">
        <h2>project</h2>
        <div className="card-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="card-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  );
}