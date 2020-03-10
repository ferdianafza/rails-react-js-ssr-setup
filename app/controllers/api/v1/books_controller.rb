class Api::V1::BooksController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    all_books = Book.all
    render json: all_books
  end

  def create
    book = Book.create(book_params)
    render json: book
  end

  def show
    book = Book.find(params[:id])
    render json: book
  end

  def update
    book = Book.find(params[:id])
    book.update(book_params)
    render json: book
  end

  def destroy
    Book.destroy(params[:id])
    head :ok
  end

  private

  def book_params
    params.permit(:title, :author, :price, :stock)
  end
end