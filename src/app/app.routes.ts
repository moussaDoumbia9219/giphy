import { HomeComponent } from './components/home/home.component'; 
import { TrendingComponent } from './components/trending/trending.component'; 
import { SearchComponent } from './components/search/search.component'; 
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'; 

export const ROUTES = [   
    { path: '', component: HomeComponent },   
    { path: 'trending', component: TrendingComponent },   
    { path: 'search', component: SearchComponent },   
    { path: '**', component: PageNotFoundComponent } 
];