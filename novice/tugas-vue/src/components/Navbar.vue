<template>
    <nav>
        <v-navigation-drawer
        color="blue"
        white
         v-model="drawer" app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        Praxis Academy
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Divisi
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
               
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-btn class="btn-top"
            color="white" 
            link to="/">Home</v-btn>
            <v-btn class="btn-top"
            color="blue"
            dark
            link to="/register">Registrasi</v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data: () => {
      return{
        drawer: false,
        items: [
            {title: 'Frontend', icon: 'mdi-monitor', route: '/frontend'},
            {title: 'Backend', icon: 'mdi-monitor-multiple', route: '/backend'},
            {title: 'Mobile', icon: 'mdi-cellphone', route: '/mobile'}
        ]
      }
    }
}
</script>

<style>
.btn-top{
    margin: 10px;
}
</style>