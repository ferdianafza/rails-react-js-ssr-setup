class Api::V1::StudentsController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    all_students = Student.all
    render json: all_students
  end

  def create
    student = Student.create(student_params)
    render json: student
  end

  def show
    student = Student.find(params[:id])
    render json: student
  end

  def update
    student = Student.find(params[:id])
    student.update(student_params)
    render json: student
  end

  def destroy
    Student.destroy(params[:id])
    head :ok
  end

  private

  def student_params
    params.permit(:firstname, :lastname, :address, :major)
  end
end