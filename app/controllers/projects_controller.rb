class ProjectsController < ApplicationController

  def index
    @contact = Contact.new
    @projects = Project.all
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      flash[:alert] = "Project created!"
      redirect_to root_url
    else
      render "new"
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  def destroy
  end

  private

    def project_params
      params.require(:project).permit(:title, :subtitle, :index_pic, :date, :skills,
      :link, :overview, profile_pics: [])
    end

end
