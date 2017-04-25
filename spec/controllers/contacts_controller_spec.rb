require 'rails_helper'
require 'spec_helper'

feature "Contact Form" do
  background do
    clear_emails
    visit root
  end

  scenario "User submits contact form. Input is saved to database and email is sent to admin" do

    # Fill in form
    within '#contactform' do
      fill_in "Name", with: "John Doe"
      fill_in "Email", with: "test@example.com"
      fill_in "Message", with: "Testing 1 2 3"
      click_on 'Submit'
    end

    # Form should be submitted and thank user
    expect(page).to have_content "Thank you for your message"

    # Message should be stored in database
    expect(Contact.count).toeq(1)

    # Email should be sent to notify admin
    open_email "admin@example.com"
    expect(current_email.header('Subject')).to_eq "Message from LeighannKinter.com"
    expect(current_email).to have_content "Testing 1 2 3"
  end

end
