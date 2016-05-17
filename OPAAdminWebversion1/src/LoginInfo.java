

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LoginInfo")
public class LoginInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;

		String user ;
		String pass;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request,response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		RequestDispatcher rd ;
		
		user = request.getParameter("username");
		pass = request.getParameter("password");
		
		if(user.equals("AilexVillamor")&&pass.equals("admin1234")){
			rd = request.getRequestDispatcher("selection.html");
			rd.forward(request,response);
		}
		else{
			rd = request.getRequestDispatcher("AdminLoginPage.html");
			out.println("Username and Password Invalid");
			rd.include(request, response);
		}
		
		out.close();
	}

}
