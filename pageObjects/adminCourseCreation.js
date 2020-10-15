import BasePage from './../pageObjects/Base.page';

class AdminCourseCreation extends BasePage {
  get testsQTY() {
    return $$('//div//h4/a');
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

  createCourse(word, about, n) {
    this.createCourseBtn.click();
    this.courseNameField.setValue(word);
    this.courseDescriptionField.setValue(about);
    this.accessTypeField.click();
    this.accessTypeDropdown[n].click();
    this.createBtn.click();
  }
}

export default new AdminCourseCreation();
