DELIMITER $$ 
CREATE TRIGGER trigger_usuario_delete BEFORE DELETE ON users FOR EACH ROW BEGIN
DELETE FROM
  follow_artist
WHERE
  user_id = OLD.id;

DELETE FROM
  reproduction_history
WHERE
  user_id = OLD.id;

  END $$

DELIMITER ;
