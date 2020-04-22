<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Base de Conhecimento" />


            
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Estatistica" active>
                            <div class="stats">
                            <Stat title="Categorias" :value="stat.categories"
                                icon="fa fa-folder" color="#d54d50" />
                            <Stat title="Artigos" :value="stat.articles"
                                icon="fa fa-file" color="#3bc480" />
                            <Stat title="Usuários" :value="stat.users"
                                icon="fa fa-user" color="#3282cd" />
                        </div>
                    </b-tab>

                    <b-tab title="Cadatro de Artigos">
                        <Article />
                    </b-tab>

                    <b-tab title="Lista de Artigos">
                        <ListaArtigos />
                    </b-tab>


                </b-tabs>             
            </b-card>
        </div>
    
    </div>

    
</template>

<script>
import PageTitle from '../template/PageTitle'
import Article from './Article'
import ListaArtigos from './ListaArtigos'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: { PageTitle, Stat, Article, ListaArtigos },
    data: function() {
        return {
            stat: {}
        }
    },
    methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getStats()
    }
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
