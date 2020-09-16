import BasePage from './../pageObjects/Base.page';

class AdminCourseCreation extends BasePage {
  get testsQTY() {
    return $$('.pb-4.mb-4.border-bottom.d-flex');
  }

  get createCourseBtn() {
    return $('.ant-btn.ant-btn-primary');
  }

  get createNewCourseText() {
    return $('.ant-drawer-title');
  }
  get courseNameField() {
    return $('#name');
  }

  get courseDescriptionField() {
    return $('#description');
  }

  get accessTypeField() {
    return $('#accessType');
  }

  get accessTypeDropdown() {
    return $$('.ant-select-item-option-content');
  }

  get createBtn() {
    return $('[type="submit"]');
  }

  get coursesList() {
    return $$('.pb-4.mb-4.border-bottom.d-flex');
  }
}

export default new AdminCourseCreation();
