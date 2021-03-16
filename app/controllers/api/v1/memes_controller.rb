class Api::V1::MemesController < ApplicationController
  before_action :set_meme, only: [:show, :update, :destroy]

  # GET /memes
  def index
    meme = Meme.all

    render json: MemeSerializer.new(meme)
  end

  # GET /memes/1
  def show
    render json: @meme
  end

  # POST /memes
  def create
    @meme = Meme.new(meme_params)

    if @meme.save
      render json: @meme, status: :created, location: @meme
    else
      render json: @meme.errors, status: :unprocessable_entity
    end
  end

  # POST /memes
  def getCreate
    @meme = Meme.new(meme_params)
    
    @meme.save
    byebug
    render json: @meme, status: :created, location: @meme
  end

  # PATCH/PUT /memes/1
  def update
    if @meme.update(meme_params)
      render json: @meme
    else
      render json: @meme.errors, status: :unprocessable_entity
    end
  end

  # DELETE /memes/1
  def destroy
    @meme.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meme
      @meme = Meme.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def meme_params
      params.require(:meme).permit(:title, :image_url, :rating, :comment_id)
    end
end
