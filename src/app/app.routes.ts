import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { SobreMim } from './Pages/sobre-mim/sobre-mim';
import { Projetos } from './Pages/projetos/projetos';
import { ProjetosIndividuais } from './Pages/projetos-individuais/projetos-individuais';

export const routes: Routes = [
    // Rotas do Starfólio
    {
        path: "",
        component: Home,
    },
    {
        path: "projetos",
        component: Projetos,
    },
    {
        path: "sobreMim",
        component: SobreMim,
    },
    {
        path: "projetos/:id",
        component: ProjetosIndividuais,
    },
];
