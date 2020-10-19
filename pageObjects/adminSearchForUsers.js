import BasePage from './../pageObjects/Base.page';

class AdminSearchForUsers extends BasePage {

  get adminTopLink(){
    return $$('.ant-dropdown-trigger.ant-dropdown-link')[0];
  }

  get usersTopLink() {
    return $('[href="/users"]');
  }
  get searchByEmailField() {
    return $('#email');
  }

  get searchByNameField() {
    return $('#name');
  }

  get searchByPhoneField() {
    return $('#phone');
  }

  get searchByGroupField() {
    return $('#group');
  }

  get searchByRoleField() {
    return $('#role');
  }

  get linkToUserProfile (){
    return $('[href="/profile/5f1f86b986482d011633f20c"]');
  }

  get userPhoneEmail(){
    return $$('.col-md-2');
  }

  get arraysOfRoles(){
    return $$('.ant-select-item-option-content');
  }

  get allInputFields (){
    return $$('.ant-form-item-control-input')
  }

  get roleLabelText(){
    return $('.col-md-1')
  }

  searchForUsers(){
    this.adminTopLink.click();
    this.usersTopLink.click();
  }
}

export default new AdminSearchForUsers();
