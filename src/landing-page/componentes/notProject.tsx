import { Link } from 'react-router-dom';

export function NotProject() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">Projeto não encontrado</h2>
        <Link to="/" className="text-emerald-500 hover:text-emerald-400">
          Voltar para home
        </Link>
      </div>
    </div>
  );
}
