class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
    # meme = Meme.find_by(id: params[:id])
    comments = Comment.all
    render json: Comment.arr_to_json 
  end


  # POST /comments
  def create
    comment = Comment.new(comment_params)
    meme = Meme.find_or_create_by(id: params[:meme_id])
    comment.meme_id = meme.id

    if comment.save
      render json: comment.instance_to_json
    else
      render json: comment.errors, status: :unprocessable_entity
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :meme_id)
    end
end
