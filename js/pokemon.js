var tipoArr = ['water', 'normal', 'fire', 'electric', 'grass', 'bug', 'flying', 'fighting', 'ice', 'rock', 'poison', 'psychic',
    'ghost', 'dragon', 'dark', 'steel', 'ground', 'fairy'
];
var spanTipos = [`<span style="background: #6890F0; border-style: solid none; border-width: 1px; border-top-color: #98D8D8; border-bottom-color: #807870; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Water</span></span>`,
    `<span style="background: #A8A878; border-style: solid none; border-width: 1px; border-top-color: #D8D8D0; border-bottom-color: #705848; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Normal</span></span>`,
    `<span style="background: #F08030; border-style: solid none; border-width: 1px; border-top-color: #F8D030; border-bottom-color: #C03028; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Fire</span></span>`,
    `<span style="background: #F8D030; border-style: solid none; border-width: 1px; border-top-color: #F8F878; border-bottom-color: #B8A038; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Electric</span></span>`,
    `<span style="background: #78C850; border-style: solid none; border-width: 1px; border-top-color: #C0F860; border-bottom-color: #588040; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Grass</span></span>`,
    `<span style="background: #A8B820; border-style: solid none; border-width: 1px; border-top-color: #D8E030; border-bottom-color: #A8B820; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Bug</span></span>`,
    `<span style="background: #A890F0; border-style: solid none; border-width: 1px; border-top-color: #C8C0F8; border-bottom-color: #705898; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Flying</span></span>`,
    `<span style="background: #C03028; border-style: solid none; border-width: 1px; border-top-color: #F08030; border-bottom-color: #484038; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Fighting</span></span>`,
    `<span style="background: #98D8D8; border-style: solid none; border-width: 1px; border-top-color: #D0F8E8; border-bottom-color: #9090A0; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Ice</span></span>`,
    `<span style="background: #B8A038; border-style: solid none; border-width: 1px; border-top-color: #E0C068; border-bottom-color: #886830; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Rock</span></span>`,
    `<span style="background: #A040A0; border-style: solid none; border-width: 1px; border-top-color: #D880B8; border-bottom-color: #483850; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Poison</span></span>`,
    `<span style="background: #F85888; border-style: solid none; border-width: 1px; border-top-color: #F8C0B0; border-bottom-color: #789010; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Psychic</span></span>`,
    `<span style="background: #705898; border-style: solid none; border-width: 1px; border-top-color: #A890F0; border-bottom-color: #483850; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Ghost</span></span>`,
    `<span style="background: #7038F8; border-style: solid none; border-width: 1px; border-top-color: #B8A0F8; border-bottom-color: #483890; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Dragon</span></span>`,
    `<span style="background: #705848; border-style: solid none; border-width: 1px; border-top-color: #A8A878; border-bottom-color: #484038; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Dark</span></span>`,
    `<span style="background: #B8B8D0; border-style: solid none; border-width: 1px; border-top-color: #D8D8C0; border-bottom-color: #807870; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Steel</span></span>`,
    `<span style="background: #E0C068; border-style: solid none; border-width: 1px; border-top-color: #F8F878; border-bottom-color: #886830; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Ground</span></span>`,
    `<span style="background: #F0B6BC; border-style: solid none; border-width: 1px; border-top-color: #F5CAD1; border-bottom-color: #905F63; border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Fairy</span></span>`
]

var ab1 = `<span style="background: #576574; border-style: solid none; border-width: 1px; border-top-color: #D8D8D0; border-bottom-color: #705848; 
border-radius: 5px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;">
<span onclick="" style="color: #F8F8F8;">`;
var ab2 = `</span></span>`;


var input = document.getElementById("caixaDeTexto");

input.addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        if (document.getElementById("caixaDeTexto").value == null) {
            return alert('Digite o nome ou o número do pokémon')
        }
        limparEvolucoes();
        document.getElementById("botaoPesquisa").click();

    }
});

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function compare(a, b) {
    if (a.num < b.num) {
        return -1;
    }
    if (a.num > b.num) {
        return 1;
    }
    return 0;
}

let listaNomesPokemon = []
let listaPokemonDesordenada = []
let listaPokemon = []

function geraListagem() {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then((resposta) => {
            retorno = resposta.data.results
            retorno.forEach((indice) => { listaNomesPokemon.push(indice) })
            listaNomesPokemon.forEach((indice) => {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${indice.name}`)
                    .then((resposta) => {
                        const pokemon = resposta.data
                        let numero = pokemon.id.toString()
                        if (numero.length == 1) { numero = `00${numero}` }
                        if (numero.length == 2) { numero = `0${numero}` }
                        let sprite = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numero}.png`
                        indice.img = sprite
                        let insercao = { name: capitalize(indice.name), img: indice.img, num: numero }
                        listaPokemonDesordenada.push(insercao)
                    })
            })
        })
}

function organizaListagem() {
    listaPokemon = listaPokemonDesordenada.sort(compare)
}

function pegaDescricaoPokemon(resposta) {
    let flavorText = resposta.data.flavor_text_entries
    flavorText.forEach(texto => {
        if (texto.language.name == 'en') {
            if (texto.version.name == 'ultra-sun') {
                let text = texto.flavor_text.toString();
                document.getElementById('evolve').style = 'font-weight: bolder; font-size: 15px';
                document.getElementById('volteMaisTarde').innerHTML = text;
            } else if (texto.version.name == 'x') {
                let text = texto.flavor_text.toString();
                document.getElementById('evolve').style = 'font-weight: bolder; font-size: 15px';
                document.getElementById('volteMaisTarde').innerHTML = text;
            }
        }
    })
}

function pegarEvolucao(urlSpecies) {
    let urlInicial = urlSpecies;
    axios.get(urlInicial)
        .then(respota => {
            pegaDescricaoPokemon(respota);
            let urlEvolucao = respota.data.evolution_chain.url;
            console.log()
            axios.get(urlEvolucao)
                .then(resposta1 => {
                    let evolve2 = [],
                        evolve3 = [];
                    let evolve1 = resposta1.data.chain.species.name;
                    if (resposta1.data.chain.evolves_to.length != 0) {
                        document.getElementById('setaUm').style = ''
                        resposta1.data.chain.evolves_to.forEach((segunda) => { evolve2.push(segunda.species.name) })
                        if (resposta1.data.chain.evolves_to[0].evolves_to[0] != undefined) { resposta1.data.chain.evolves_to[0].evolves_to.forEach((terceira) => { evolve3.push(terceira.species.name) }) }
                    } else {
                        document.getElementById('setaUm').style = 'display: none'
                        document.getElementById(`pokemonSegundaEvolucaoNome0`).innerText = '';
                    }

                    if (evolve2.length > 4) { document.getElementById('variasEvolucoes').style = '' } else { document.getElementById('variasEvolucoes').style = 'display: none' }

                    if (evolve1 == 'oricorio') { evolve1 = 'oricorio-baile' }

                    axios.get(`https://pokeapi.co/api/v2/pokemon/${evolve1}`)
                        .then(resposta => {
                            let nome = capitalize(resposta.data.name);
                            let numero = resposta.data.id.toString();
                            if (numero.length == 1) { numero = `00${numero}` }
                            if (numero.length == 2) { numero = `0${numero}` }
                            let sprite = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numero}.png`
                            document.getElementById('pokemonPrimeiraEvolucao').src = sprite;
                            document.getElementById('pokemonPrimeiraEvolucaoNome').innerText = `${nome}`;

                        })

                    if (evolve2.length != 0) {
                        evolve2.forEach((evolucao, index) => {
                            axios.get(`https://pokeapi.co/api/v2/pokemon/${evolucao}`)
                                .then(resposta => {
                                    let nome = capitalize(resposta.data.name);
                                    let numero = resposta.data.id.toString();
                                    if (numero.length == 1) { numero = `00${numero}` }
                                    if (numero.length == 2) { numero = `0${numero}` }
                                    let sprite = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numero}.png`
                                    document.getElementById(`pokemonSegundaEvolucao${index}`).src = sprite;
                                    document.getElementById(`pokemonSegundaEvolucaoNome${index}`).innerText = `${nome}`;
                                })
                        })
                    }
                    if (evolve3.length != 0) {
                        evolve3.forEach((evolucao, index) => {
                            axios.get(`https://pokeapi.co/api/v2/pokemon/${evolucao}`)
                                .then(resposta => {
                                    document.getElementById('setaDois').style = ''
                                    let nome = capitalize(resposta.data.name);
                                    let numero = resposta.data.id.toString();
                                    if (numero.length == 1) { numero = `00${numero}` }
                                    if (numero.length == 2) { numero = `0${numero}` }
                                    let sprite = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numero}.png`
                                    document.getElementById(`pokemonTerceiraEvolucao${index}`).src = sprite;
                                    document.getElementById(`pokemonTerceiraEvolucaoNome${index}`).innerText = `${nome}`;
                                })
                        })
                    } else {
                        document.getElementById(`pokemonTerceiraEvolucaoNome0`).innerText = '';
                        document.getElementById('setaDois').style = 'display: none'
                    }
                })
        })
}

function limparEvolucoes() {
    for (let i = 0; i < 8; i++) {
        document.getElementById(`pokemonSegundaEvolucao${i}`).src = ' ';
        document.getElementById(`pokemonSegundaEvolucaoNome${i}`).innerText = ' ';
    }
    for (let i = 0; i < 4; i++) {
        document.getElementById(`pokemonTerceiraEvolucao${i}`).src = '';
        document.getElementById(`pokemonTerceiraEvolucaoNome${i}`).innerText = '';
    }
}

function pegarInformacaoDasHabilidades(urlAbilities) {
    let url = urlAbilities;
    url.forEach((habilidade, index) => {
        axios.get(url[index])
            .then(resposta => {
                resposta.data.effect_entries.forEach(lingua => {
                    if (lingua.language.name == 'en') {
                        document.getElementById(`corpo${index}`).innerText = lingua.effect;
                    }
                })
            })
            .catch(function(erro) {
                console.log(erro)
            })
    })
}

function pegarInformacoesDoTipo(tipos) {
    let types = tipos;
    if (types[1] != undefined) {
        document.getElementById('tipo0').innerHTML = `${spanTipos[types[0]]}`;
        document.getElementById('tipo1').innerHTML = `${spanTipos[types[1]]}`;
    } else {
        document.getElementById('tipo0').innerHTML = `${spanTipos[types[0]]}`;
    }
    types.forEach((tipo, index) => {
        axios.get(`https://pokeapi.co/api/v2/type/${tipo}`)
            .then(resposta => {
                let noDamageTo = '',
                    halfDamageTo = '',
                    doubleDamageTo = '',
                    noDamageFrom = '',
                    halfDamageFrom = '',
                    doubleDamageFrom = '';
                let danos = resposta.data.damage_relations
                danos.no_damage_to.forEach((noTo => noDamageTo += ` ${spanTipos[tipoArr.indexOf(noTo.name)]}`))
                danos.half_damage_to.forEach((halfTo => halfDamageTo += ` ${spanTipos[tipoArr.indexOf(halfTo.name)]}`));
                danos.double_damage_to.forEach((doubleTo => doubleDamageTo += ` ${spanTipos[tipoArr.indexOf(doubleTo.name)]}`));
                danos.no_damage_from.forEach((noFrom => noDamageFrom += ` ${spanTipos[tipoArr.indexOf(noFrom.name)]}`));
                danos.half_damage_from.forEach((halfFrom => halfDamageFrom += ` ${spanTipos[tipoArr.indexOf(halfFrom.name)]}`));
                danos.double_damage_from.forEach((doubleFrom => doubleDamageFrom += ` ${spanTipos[tipoArr.indexOf(doubleFrom.name)]}`));

                document.getElementById(`corpoTipo${index}`).innerHTML = `
                No Damage To: ${noDamageTo} <br>
                Half Damage To: ${halfDamageTo} <br>
                Double Damage To: ${doubleDamageTo}
                <br><hr><br> 
                No Damage From: ${noDamageFrom} <br>
                Half Damage From: ${halfDamageFrom} <br>
                Double Damage From: ${doubleDamageFrom}`;
            })
            .catch(function(erro) {
                console.log(erro)
            })
    })

}

function pegarInformacaoBasica(resposta) {
    let nome = capitalize(resposta.data.name);
    let numero = resposta.data.id.toString();
    if (numero.length == 1) { numero = `00${numero}` }
    if (numero.length == 2) { numero = `0${numero}` }
    let sprite = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numero}.png`

    document.getElementById('fotoPokemon').src = sprite;
    document.getElementById('nomePokemon').innerText = nome;
    document.getElementById('pokemonTitulo').innerText = `${nome} - Infos`;
    document.getElementById('numeroPokemon').innerText = `Nº${numero}`;


    let types = []
    resposta.data.types.forEach(tipos => types.push(tipoArr.indexOf(tipos.type.name)))
    if (types[1] != undefined) { document.getElementById('tipoPokemon').innerHTML = `<a data-toggle="modal" data-target="#Type0">${spanTipos[types[0]]}</a> | <a data-toggle="modal" data-target="#Type1">${spanTipos[types[1]]}</a>`; }
    if (types[1] == undefined) { document.getElementById('tipoPokemon').innerHTML = `<a data-toggle="modal" data-target="#Type0">${spanTipos[types[0]]}</a>` }

    let abilities = [];
    let urlAbilities = [];
    resposta.data.abilities.forEach((habilidades, index) => abilities.push((habilidades.ability.name)))
    resposta.data.abilities.forEach((habilidades, index) => urlAbilities.push((habilidades.ability.url)))

    let habilidadeEstilo = ''
    abilities.forEach((habilidade, index) => {
        habilidadeEstilo += `<a data-toggle="modal" data-target="#exampleModal${index}">${ab1}${habilidade}${ab2}</a> `;
    });

    document.getElementById('abilitiesTextoOculto').innerText = "Abilities";
    document.getElementById('habilidadesPokemon').innerHTML = `${habilidadeEstilo}`;

    abilities.forEach((habilities, index) => { document.getElementById(`habilidade${index}`).innerText = capitalize(habilities) });

    pegarInformacaoDasHabilidades(urlAbilities);
    pegarInformacoesDoTipo(types);
    pegarEvolucao(resposta.data.species.url);

}

function main(resposta) {
    if (document.getElementById("caixaDeTexto").value == '') {
        return alert('Digite o nome ou o número do pokémon')
    }
    limparEvolucoes();
    let input = document.getElementById('caixaDeTexto').value.toLowerCase();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(resposta => {
            pegarInformacaoBasica(resposta);
        })
        .catch(function(erro) {
            console.log(erro)
        })
};


$(function() {
    listaPokemon;
    $("#caixaDeTexto").autocomplete({
            minLength: 0,
            source: function(request, response) {
                response($.map(listaPokemon, function(obj, key) {

                    var name = obj.name.toUpperCase();

                    if (name.indexOf(request.term.toUpperCase()) != -1) {
                        return {
                            label: obj.name, // Label for Display
                            // value: obj.id // Value
                            img: obj.img,
                            num: obj.num
                        }
                    } else {
                        return null;
                    }
                }));
            },
            focus: function(event, ui) {
                event.preventDefault();
            },
            // Once a value in the drop down list is selected, do the following:
            select: function(event, ui) {
                event.preventDefault();
                // place the person.given_name value into the textfield called 'select_origin'...
                $('#caixaDeTexto').val(ui.item.label);
                //definePokemon()
                // ... any other tasks (like setting Hidden Fields) go here...
            },
            html: true,
            open: function(event, ui) {
                $(".ui-autocomplete").css("z-index", 1000);

            }
        })
        .autocomplete("instance")._renderItem = function(ul, item) {
            // return $("<li><div><img src=" + item.img + "><span>" + item.value + "</span></div></li>").appendTo(ul);
            return $(`<li><div><img src=${item.img}><span> N° ${item.num} - </span><span>${item.value}</span></div></li>`).appendTo(ul);
        };
})