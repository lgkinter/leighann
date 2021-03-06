class ProjectsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show, :sbed, :lettering]

  def index
    @contact = Contact.new
    @projects = Project.order("id DESC").all
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
    @project = Project.friendly.find(params[:id])
    @letterings = Lettering.order("id DESC").all
  end

  def edit
    @project = Project.friendly.find(params[:id])
  end

  def update
    @project = Project.friendly.find(params[:id])
    if @project.update_attributes(project_params)
      flash[:alert] = "Project has been successfully updated."
      redirect_to @project
    else
      render 'edit'
    end
  end

  def destroy
    Project.friendly.find(params[:id]).destroy
    flash[:alert] = "Project has been successfully deleted."
    redirect_to root_path
  end

  def sbed
  end


  private

    def project_params
      params.require(:project).permit(:title, :subtitle, :index_pic, :date, :skills,
      :link, :overview, :categories, :slug, profile_pics: [])
    end

end
