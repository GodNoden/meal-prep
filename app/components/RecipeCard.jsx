export default function RecipeCard({ title, description }) {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/images/healthy-food.jpg" alt="Receta" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Ver más</button>
          </div>
        </div>
      </div>
    );
  }