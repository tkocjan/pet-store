package com.wk;

import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author WaleedK
 */
@ControllerAdvice
public class GlobalControllerExceptionHandler {
	@ExceptionHandler(ConstraintViolationException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ResponseBody
	public List<String> handleConstraintViolationException(HttpServletRequest req, ConstraintViolationException ex) {
		ArrayList<String> errorCodes = new ArrayList<>(ex.getConstraintViolations().size());
		for (ConstraintViolation<?> constraintViolation : ex.getConstraintViolations()) {
			errorCodes.add(constraintViolation.getMessageTemplate());
		}
		return errorCodes;
	}
}