require 'test_helper'

class ContactsControllerTest < ActionDispatch::IntegrationTest
  test "GET new" do
    get root_url

    assert_response :success

    assert_select 'form' do
      assert_select 'input[type=text]'
      assert_select 'input[type=email]'
      assert_select 'textarea'
      assert_select 'button[type=submit]'
    end
  end

  test "POST create" do
    post contacts_url, params: {
      contact: {
        name: 'cornholio',
        email: 'cornholio@example.org',
        message: 'hai'
      }
    }

    assert_match /Thank you for your message!/, response.body
  end

  test "invalid POST create" do
   post contacts_url, params: {
     contact: { name: '', email: '', message: '' }
   }

   assert_match /Name .* blank/, response.body
   assert_match /Email .* blank/, response.body
   assert_match /Body .* blank/, response.body
 end

end
