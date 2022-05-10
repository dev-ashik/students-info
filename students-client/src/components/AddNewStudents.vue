
<template>
    <div class="studentFormPage">
        <div class="logoSection">
            <img class="logo" src="../assets/resto-logo.png" alt="">
            <h1>New Students Form</h1>
        </div>

        <div class="studentForm">
            <p>Student Name:</p>
            <input type="text" v-model="name" placeholder="Student Name">

            <div>
                <p>Gender</p>
                <label for="male">Male</label>
                <input type="radio" id="male" value="male" v-model="gender" />
                <label for="two">Female</label>
                <input type="radio" id="female" value="female" v-model="gender" />
            </div>

            <p>Age</p>
            <input type="number" v-model="age" min="1" max="300">

            <p>Country: </p>
            <select v-model="country">
                <option disabled value="">Please select your country</option>
                <option v-for="(value) in countries" :key="value">{{ value }}</option>

                <!-- <option value="CN">CN</option>
                <option value="ZM">ZM</option>
                <option value="BD">BD</option>
                <option value="IN">IN</option>
                <option value="PK">PK</option> -->
            </select>

            <div>
                <p>Hobby: </p>
                <input type="checkbox" id="studying" value="studying" v-model="hobby" />
                <label for="studying">Studying</label>

                <input type="checkbox" id="playingGame" value="playingGame" v-model="hobby" />
                <label for="playingGame">Flaying Game</label>

                <input type="checkbox" id="eating" value="eating" v-model="hobby" />
                <label for="eating">Eating</label>

                <input type="checkbox" id="travelling" value="travelling" v-model="hobby" />
                <label for="eating">Travelling</label>

            </div>

            <p>Other Information:</p>
            <textarea v-model="otherInformation"></textarea>

            <input type="checkbox" id="agree" value=true v-model="agree" />
            <label for="agree">Agree receive our promotions.</label>

            <button v-on:click="signUp">Add a new Student</button>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';



export default {
    name: 'SignUp',
    data() {
        return {
            countries: {
                China: "CN",
                Zambia: "ZM",
                Bangladesh: "BD",
                India: "IN",
                Pakistan: "PK"
            },
            hobbies: ["Studying", "Playing Game", "Eating", "Travelling"],
            name: '',
            gender: '',
            age: '',
            country: '',
            hobby: [],
            otherInformation: '',
            agree: false
        }
    },

    methods: {
        async signUp() {
            let result = await axios.post('http://localhost:3000/students', {
                name: this.name,
                gender: this.gender,
                age: this.age,
                country: this.country,
                hobby: this.hobby,
                otherInformation: this.otherInformation,
                agree: this.agree
            })
            console.log(result);
            if (result.status == 201) {
                window.alert("New students added.");
            }
        },
        onChange(event) {
            var optionText = event.target.value;
            console.log(optionText);
        },
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'HomePage' })
        }
    }



}

</script>


<style>
.studentFormPage {
    width: 400px;
    margin: auto;
    margin-bottom: 50px;
}

.logoSection {
    text-align: center;
}

.logo {
    width: 150px;
    height: 150px;
}

.studentForm input[type=text],
.studentForm input[type=number] {
    width: 400px;
    height: 40px;
    padding-left: 20px;
    display: block;
    font-size: 18px;
    /* margin-bottom: 30px; */
    /* margin-left: auto;
    margin-right: auto; */
    border: 1px solid skyblue;
}

.studentForm select {
    width: 425px;
    height: 40px;
    padding-left: 20px;
    display: block;
    font-size: 18px;
    border: 1px solid skyblue;
}

.studentForm textarea {
    width: 400px;
    height: 100px;
    padding-left: 20px;
    display: block;
    font-size: 18px;
    margin-bottom: 20px;
    border: 1px solid skyblue;

}

.studentForm p {
    font-weight: 700;
    margin-bottom: 4px;
}

.studentForm button {
    width: 424px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
    margin-top: 20px;
}
</style>