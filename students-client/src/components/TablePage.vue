

<template>
	<div class="studentsList">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Gender</th>
					<th>Age</th>
					<th>Country</th>
					<th>Hobby</th>
					<th>Receive Promotions</th>
					<th>Operation</th>
				</tr>
			</thead>
			<tbody>

				<tr v-for="(students) in studentList" :key="students">
                    <td>{{ students.name }}</td>
					<td>{{students.gender}}</td>
					<td>{{students.age}}</td>
					<td>{{students.country}}</td>
					<td><span v-for="(hobby) in students.hobby" :key="hobby">{{hobby}}, </span></td>
					<td :class="students.agree ? 'green' : 'red'">{{students.agree ? "Agree receive Promotion." : "Don't send me promotion."}}</td>
					<td><button class="deleteButton" >Delete</button></td>
                </tr>
			</tbody>
		</table>
	</div>
</template>


<script>
import axios from 'axios';
export default {
	data() {
		return {
			studentList: [],
			items: [{ message: 'Foo' }, { message: 'Bar' }]
		}	
	},
	async mounted() {
			try {
				const res = await axios.get(`http://localhost:3000/students`);
				this.studentList = res.data;
			} catch (error) {
				console.log(error);
			}
		
		},
	method:	{
		// handleDelete(id) {
		// 	console.log(id)
        //     let result = await axios.post('http://localhost:3000/students') 
        // }
	}

}
</script>

<style>
	.studentsList {
padding: 50px 0;
	}

	table {
		border-collapse: collapse;
		width: 60%;
		margin: auto;
		border-radius: 7px 7px 0 0;
	}

	th, td {
		padding: 15px;
	}

	th {
		background-color: #B9CBFF;
		text-align: left;
	}
	

	td {
		background-color: #E8EEFF;
		border-bottom: 1px solid #E7EDFF;
	}

	.green {
		color: rgb(4, 170, 4);
	}
	.red {
		color: red;
	}
	.deleteButton {
		color: #655DBC;
		border: none;
		background-color: #E8EEFF;
		font-size: 16px;
		cursor: pointer;
		text-decoration: underline;
	}
</style>