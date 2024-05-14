import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokeDescriptionComponent } from './components/poke-description/poke-description.component';

export const routes: Routes = [
    {
        path:'home',component:HomeComponent
    },
    {
        path:'pokemons',component:PokemonsComponent
    },
    {
        path:'pokemons/:id', component: PokeDescriptionComponent
    }
];
