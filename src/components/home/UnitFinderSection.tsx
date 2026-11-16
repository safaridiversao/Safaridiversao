import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Navigation, Search, Ticket } from 'lucide-react';
import { useCatalog } from '../../context/CatalogContext';

export function UnitFinderSection({ limit }: { limit?: number }) {
  const { units, linkWithAttribution } = useCatalog();
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const states = useMemo(
    () => Array.from(new Set(units.map((u) => u.state))).sort(),
    [units]
  );

  const cities = useMemo(
    () =>
      Array.from(
        new Set(
          units
            .filter((u) => !selectedState || u.state === selectedState)
            .map((u) => u.city)
        )
      ).sort(),
    [units, selectedState]
  );

  const filteredUnits = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const list = units.filter((unit) => {
      if (selectedState && unit.state !== selectedState) return false;
      if (selectedCity && unit.city !== selectedCity) return false;
      if (
        q &&
        !unit.shoppingName.toLowerCase().includes(q) &&
        !unit.city.toLowerCase().includes(q) &&
        !unit.name.toLowerCase().includes(q) &&
        !unit.themeName.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
    return limit ? list.slice(0, limit) : list;
  }, [units, selectedState, selectedCity, searchTerm, limit]);

  function clearFilters() {
    setSelectedState('');
    setSelectedCity('');
    setSearchTerm('');
  }

  return (
    <section id="unidades" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-semibold text-safari-emerald">Nossas unidades pelo Brasil</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-safari-ink">
            Encontre sua Safári
          </h2>
          <p className="text-sm sm:text-base text-safari-muted">
            Pesquise por estado, cidade ou shopping para conferir endereço, horários e garantir ingressos.
          </p>
        </div>

        {limit && units.length > limit && (
          <Link
            to={linkWithAttribution('/unidades')}
            className="text-sm font-semibold text-safari-emerald hover:underline whitespace-nowrap shrink-0"
          >
            Ver todas as unidades ({units.length})
          </Link>
        )}
      </div>

      {/* Barra de pesquisa */}
      <div className="bg-white rounded-2xl border border-emerald-950/10 p-4 sm:p-5 grid sm:grid-cols-3 gap-3 mb-8">
        <div>
          <label htmlFor="filter-state" className="sr-only">
            Filtrar por estado
          </label>
          <select
            id="filter-state"
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity('');
            }}
            className="w-full h-11 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm font-medium text-safari-ink focus:outline-none focus:border-safari-emerald"
          >
            <option value="">Todos os estados</option>
            {states.map((uf) => (
              <option key={uf} value={uf}>
                Estado: {uf}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-city" className="sr-only">
            Filtrar por cidade
          </label>
          <select
            id="filter-city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full h-11 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm font-medium text-safari-ink focus:outline-none focus:border-safari-emerald"
          >
            <option value="">Todas as cidades</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <label htmlFor="filter-search" className="sr-only">
            Buscar por shopping
          </label>
          <Search className="w-4 h-4 text-safari-muted absolute left-3.5 top-3.5 pointer-events-none" />
          <input
            id="filter-search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por shopping ou cidade..."
            className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm text-safari-ink placeholder:text-safari-muted focus:outline-none focus:border-safari-emerald"
          />
        </div>
      </div>

      {filteredUnits.length === 0 ? (
        <div className="bg-white rounded-2xl border border-emerald-950/10 p-10 text-center space-y-3">
          <p className="font-display text-lg font-bold text-safari-ink">
            Nenhuma unidade encontrada com esse filtro
          </p>
          <p className="text-sm text-safari-muted">
            Limpe os filtros para visualizar todas as unidades disponíveis nos shoppings.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="px-5 py-2.5 rounded-xl bg-safari-emerald text-white text-sm font-semibold hover:bg-safari-emerald-dark transition-colors"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnits.map((unit) => (
            <article
              key={unit.id}
              className="bg-white rounded-2xl border border-emerald-950/10 overflow-hidden flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div>
                <div className="aspect-[4/3] bg-safari-emerald-soft overflow-hidden">
                  <img
                    src={unit.coverImageUrl}
                    alt={`${unit.shoppingName} - ${unit.themeName}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs font-medium text-safari-muted">
                    {unit.city} · {unit.state} · {unit.themeName}
                  </p>

                  <h3 className="font-display text-xl font-bold text-safari-ink">
                    <Link
                      to={linkWithAttribution(`/unidades/${unit.slug}`)}
                      className="hover:text-safari-emerald transition-colors"
                    >
                      {unit.shoppingName}
                    </Link>
                  </h3>

                  <div className="space-y-2 text-sm text-safari-muted">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-safari-emerald shrink-0 mt-0.5" />
                      <span>{unit.address}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-safari-emerald shrink-0 mt-0.5" />
                      <span>{unit.openingHours}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3">
                <a
                  href={unit.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 rounded-xl border border-emerald-950/15 text-safari-ink font-semibold text-sm inline-flex items-center justify-center gap-1.5 hover:bg-safari-canvas transition-colors whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 text-safari-emerald shrink-0" />
                  Google Maps
                </a>

                <Link
                  to={linkWithAttribution('/ingressos', { unidade: unit.code })}
                  className="h-11 rounded-xl bg-safari-coral hover:bg-safari-coral-hover text-white font-display font-semibold text-sm inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                >
                  <Ticket className="w-4 h-4 shrink-0" />
                  Comprar
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
