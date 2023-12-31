package productdto

type ProductRequest struct {
	Name       string `json:"name" form:"name" validate:"required"`
	Desc       string `json:"desc" form:"desc" validate:"required"`
	Price      int    `json:"price" form:"price" validate:"required"`
	Image      string `json:"image" form:"image" validate:"required"`
	Qty        int    `json:"qty" form:"qty" validate:"required"`
	UserID     int    `json:"user_id"`
	CategoryID int    `json:"category_id" form:"category_id" validate:"required"`
}
