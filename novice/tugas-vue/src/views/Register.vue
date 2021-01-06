<template>
  <v-container class="register">
      <v-card>
    <v-parallax
       src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2015/01/Blog_Learn-to-code.jpg.webp">
        <v-card-title>
            <h1>Registrasi</h1>
        </v-card-title>
        <v-form ref="form">
            <v-card-text>
                <v-text-field 
                label="Nama" 
                v-model="user.name"
                :rules="nameRules" />
                <v-text-field 
                label="Alamat" 
                v-model="user.address"
                :rules="addressRules"/>
                <v-text-field 
                label="Hendpone" 
                v-model="user.hendpone"
                :rules="HandponeRules"/>
                <v-select 
                label="Program"
                :items="programku"
                v-model="user.program"
                :rules="programRules"
                dense/>
            </v-card-text>
            <v-card-actions>
                <v-btn
                color="blue"
                dark
                 @click="handleSubmit"> Daftar </v-btn>
            </v-card-actions>
        </v-form>
      </v-parallax>
      </v-card>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            programku: ['Frontend', 'Backend', 'Mobile'],
            nameRules: [
                v => !!v || 'Nama wajib diisi!',
                v => v.length >= 5 || 'Nama harus lebih dari 5 karakter'
            ],
            addressRules: [
                v => !!v || 'Alamat wajib diisi!',
                v => v.length >= 5 || 'Alamat harus lebih dari 5 karakter'
            ],
            Hendpone: [
                v => !!v || 'Hendpone is required',
                v => v.length >= 5 || 'Hendpone must be more than 5 number'
            ],
            programRules: [
                v => !!v || 'pilih programnya',
            ],
            user: {
                name: '',
                address: '',
                Hendpone:'',
                program: '',
                isApproved: false
            }
        }
    },
    methods: {
        handleSubmit(){
            console.log(this.user); //check
            if(this.$refs.form.validate()){
                this.$store.commit('addUser', this.user)
                alert('Data berhasil ditambahkan!')
                if (this.user.program == 'Frontend') {
                    this.$router.push({name: 'FrontEnd'})
                }else if(this.user.program == 'Backend'){
                    this.$router.push({name: 'BackEnd'})
                }else{
                    this.$router.push({name: 'Mobile'})
                } 
            }
        }
    }
}
</script>

<style>
.register{
  text-align: justify;
  max-width: 1500px;
}
</style>