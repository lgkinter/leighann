class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @contact = Contact.new
  end

end
