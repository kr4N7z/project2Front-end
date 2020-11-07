import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component'
import { UpdateProfileService } from '../services/update-profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
  providers: [UpdateProfileService]
})
export class UpdateProfileComponent implements OnInit {

  constructor(private appComponent:AppComponent, private updateProfileService:UpdateProfileService) { }

  userId = this.appComponent.userId
  email = this.appComponent.userEmail
  firstName = this.appComponent.userFirstName
  lastName = this.appComponent.userLastName

  service:UpdateProfileService

  edit(){
    let email = document.getElementById("email")
    let firstName = document.getElementById("first-name")
    let lastName = document.getElementById("last-name")
    let editButton = document.getElementById("edit-button")

    let emailValue = email.innerText
    let firstNameValue = firstName.innerText
    let lastNameValue = lastName.innerText

    let emailInput = document.createElement("input")
    let firstNameInput = document.createElement("input")
    let lastNameInput = document.createElement("input")
    let submitButton = document.createElement("button")

    emailInput.setAttribute('type','email')

    emailInput.value = emailValue
    firstNameInput.value = firstNameValue
    lastNameInput.value = lastNameValue
    submitButton.innerText = "Submit"

    email.replaceWith(emailInput)
    firstName.replaceWith(firstNameInput)
    lastName.replaceWith(lastNameInput)
    editButton.replaceWith(submitButton)

    emailInput.id = "email"
    firstNameInput.id = "first-name"
    lastNameInput.id = "last-name"
    submitButton.id = "submit-button"
    submitButton.classList.add("btn")
    submitButton.classList.add("btn-secondary")

    submitButton.addEventListener('click',this.submit)        
  }
  submit = () => {
    let email = (<HTMLInputElement>document.getElementById("email"))
    let firstName = (<HTMLInputElement>document.getElementById("first-name"))
    let lastName = (<HTMLInputElement>document.getElementById("last-name"))
    let submitButton = document.getElementById("submit-button")

    let emailValue = email.value
    let firstNameValue = firstName.value
    let lastNameValue = lastName.value

    if(firstNameValue.length > 0 && lastNameValue.length > 0){
      this.updateProfileService.updateUser(this.appComponent.userId,emailValue,firstNameValue,lastNameValue).subscribe()
    } else{
      window.alert("First name and Last name cannot be empty!")
    }
   
    this.appComponent.userEmail = emailValue;
    this.appComponent.userFirstName = firstNameValue;
    this.appComponent.userLastName = lastNameValue;

    let emailRevised = document.createElement("p")
    let firstNameRevised = document.createElement("p")
    let lastNameRevised = document.createElement("p")
    let editButton = document.createElement("button")

    emailRevised.innerText = emailValue
    firstNameRevised.innerText = firstNameValue
    lastNameRevised.innerText = lastNameValue
    editButton.innerText = "Edit"

    email.replaceWith(emailRevised)
    firstName.replaceWith(firstNameRevised)
    lastName.replaceWith(lastNameRevised)
    submitButton.replaceWith(editButton)

    emailRevised.id = "email"
    firstNameRevised.id = "first-name"
    lastNameRevised.id = "last-name"
    editButton.id = "edit-button"
    editButton.classList.add("btn")
    editButton.classList.add("btn-secondary")

    editButton.addEventListener('click',this.edit)
  }
  ngOnInit(): void {
  }

}
