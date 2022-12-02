let pokemonRepository = (function () {
  let e = [];
  function t(t) {
    if ('object' != typeof t || !('name' in t))
      return `${t} is not a Pok\xe9mon. Pok\xe9mon must be an object with the keys name, height and type`;
    e.push(t);
  }
  function n() {
    return e;
  }
  function i(e) {
    let t = document.querySelector('.modal-body'),
      n = document.querySelector('.modal-title');
    (n.innerText = ''),
      (t.innerText = ''),
      (n.innerText = `${e.name}`),
      n.classList.add('text-capitalize'),
      t.classList.add('container-fluid');
    let i = document.createElement('div');
    t.appendChild(i), i.classList.add('row');
    let s = document.createElement('img');
    i.appendChild(s),
      s.setAttribute('src', `${e.imgUrl}`),
      s.setAttribute('alt', `Pokemon ${e.name} image`),
      s.classList.add('col-12'),
      s.classList.add('col-md-4'),
      s.classList.add('pokemon__image');
    let a = document.createElement('div');
    i.appendChild(a), a.classList.add('col-12'), a.classList.add('col-md-8');
    let l = document.createElement('ul');
    a.appendChild(l),
      a.classList.add('list-group'),
      a.classList.add('list-group-flush');
    let d = document.createElement('li');
    (d.innerHTML = `<span><strong>Height: </strong>${e.height}</span>`),
      l.appendChild(d),
      d.classList.add('list-group-item');
    let o = document.createElement('li');
    (o.innerHTML = `<span><strong>Weight: </strong>${e.weight}</span>`),
      l.appendChild(o),
      o.classList.add('list-group-item');
    let r = document.createElement('li');
    (r.innerHTML = `<span><strong>Base experience: </strong>${e.experience}</span>`),
      l.appendChild(r),
      r.classList.add('list-group-item');
    let c = (function e(t) {
        let n = '';
        for (let i = 0; i < t.length; i++)
          i === t.length - 1
            ? (n += `${t[i].ability.name}`)
            : (n += `${t[i].ability.name}, `);
        return n;
      })(e.abilities),
      p = document.createElement('li');
    (p.innerHTML = `<span><strong>Abilities: </strong>${c}</span>`),
      l.appendChild(p),
      p.classList.add('list-group-item');
    let m = (function e(t) {
        let n = '';
        for (let i = 0; i < t.length; i++)
          i === t.length - 1
            ? (n += `${t[i].type.name}`)
            : (n += `${t[i].type.name}, `);
        return n;
      })(e.types),
      h = document.createElement('li');
    (h.innerHTML = `<span><strong>Types: </strong>${m}</span>`),
      l.appendChild(h),
      h.classList.add('list-group-item');
  }
  function s(e) {
    pokemonRepository.loadDetails(e).then(function () {
      i(e);
    });
  }
  let a;
  return (
    document.querySelector('.form-inline').addEventListener('submit', (t) => {
      t.preventDefault(),
        (function t() {
          let n = $('#searchInput').val();
          if ('' === n) alert('You need to write the name of pokemon');
          else {
            var s;
            (s = n.toLowerCase()),
              e.filter((e) => {
                e.name === s && i(e);
              });
          }
        })();
    }),
    {
      add: t,
      getAll: n,
      addListItem: function e(t) {
        let n = t.weightLbs > 200 ? '<h3>WOW! Super heavy!</h3>' : '',
          i = document.querySelector('.pokemon-list');
        i.classList.add('row'), i.classList.add('justify-content-center');
        let a = document.createElement('div');
        i.appendChild(a),
          a.classList.add('col-sm-6'),
          a.classList.add('col-md-4'),
          a.classList.add('col-lg-3'),
          a.classList.add('p-1');
        let l = document.createElement('div');
        a.appendChild(l),
          l.classList.add('pokemon-list__item'),
          l.classList.add('py-3'),
          l.classList.add('row'),
          l.classList.add('m-0'),
          l.classList.add('text-center'),
          l.classList.add('justify-content-center');
        let d = document.createElement('img');
        l.appendChild(d),
          d.setAttribute('src', t.imgUrl),
          d.setAttribute('alt', `Pokemon ${t.name} image`),
          d.classList.add('pokemon__image'),
          d.classList.add('col-12');
        let o = document.createElement('h2');
        l.appendChild(o),
          (o.innerText = t.name),
          o.classList.add('text-capitalize'),
          o.classList.add('col-12'),
          o.classList.add('mt-3');
        let r = document.createElement('div');
        l.appendChild(r), (r.innerHTML = n), r.classList.add('col-12');
        let c = document.createElement('ul');
        l.appendChild(c),
          c.classList.add('list-unstyled'),
          c.classList.add('col-12');
        let p = document.createElement('li');
        c.appendChild(p);
        let m = document.createElement('span');
        p.appendChild(m),
          (m.innerText = 'Height: '),
          m.classList.add('font-weight-bolder');
        let h = document.createElement('span');
        p.appendChild(h), (h.innerText = `${t.height}`);
        let u = document.createElement('li');
        c.appendChild(u);
        let L = document.createElement('span');
        u.appendChild(L),
          (L.innerText = 'Weight: '),
          L.classList.add('font-weight-bolder');
        let g = document.createElement('span');
        u.appendChild(g), (g.innerText = `${t.weight}`);
        let f = document.createElement('button');
        l.appendChild(f),
          (f.innerText = 'Show details'),
          f.classList.add('pokemon-details__button'),
          f.classList.add('p-2'),
          f.classList.add('rounded'),
          f.classList.add('col-6'),
          f.setAttribute('data-toggle', 'modal'),
          f.setAttribute('data-target', '#pokemon-modal'),
          f.addEventListener('click', function () {
            s(t);
          });
      },
      loadList: function e() {
        return fetch('https://pokeapi.co/api/v2/pokemon/?limit=60')
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            e.results.forEach(function (e) {
              t({ name: e.name, detailsUrl: e.url });
            });
          })
          .catch(function (e) {
            console.error(e);
          });
      },
      loadDetails: function e(t) {
        return fetch(t.detailsUrl)
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            (t.imgUrl = e.sprites.other.dream_world.front_default),
              (t.height = e.height),
              (t.weight = e.weight),
              (t.types = e.types),
              (t.abilities = e.abilities),
              (t.experience = e.base_experience);
          })
          .catch(function (e) {
            console.error(e);
          });
      },
      showDetails: s,
      showDetailsModal: i,
    }
  );
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach((e) => {
    pokemonRepository.loadDetails(e).then(function () {
      pokemonRepository.addListItem(e);
    });
  });
});
