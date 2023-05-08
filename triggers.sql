CREATE 
    TRIGGER  delete_dealers
 AFTER DELETE ON dealers FOR EACH ROW 
    INSERT INTO 
    deleted_dealers (id , name , phone , email , panNumber , city , address , status , createdAt , updatedAt) 
    VALUES (OLD.id , OLD.name , OLD.phone , OLD.email , OLD.panNumber , OLD.city , OLD.address , OLD.status , OLD.createdAt , OLD.updatedAt) 
    ON DUPLICATE KEY UPDATE `name` = VALUES( `name`) , `email` = VALUES( `email`) , `panNumber` = VALUES( `panNumber`) , `city` = VALUES( `city`) , `address` = VALUES( `address`);
