using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using AngularDotnetInventoryDemo.Models;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Identity;

namespace AngularDotnetInventoryDemo
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            string conString = Configuration["ConnectionStrings:DefaultConnection"];
            services.AddDbContext<DataContext>(options => { 
                options.UseSqlServer(conString);
            });
            services.AddDbContext<IdentityDataContext>(options => {
                options.UseSqlServer(Configuration["ConnectionStrings:Identity"]);
            });
            services.AddIdentity<IdentityUser, IdentityRole>()
            .AddEntityFrameworkStores<IdentityDataContext>();

            services.AddControllersWithViews();
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
            services.AddSwaggerGen(options => {
                options.SwaggerDoc("v1", 
                    new OpenApiInfo {Title ="Lesenya Test Project", Version = "v1"}
                    );
            });
            services.AddDistributedSqlServerCache(options => {
                options.ConnectionString = conString;
                options.SchemaName = "dbo";
                options.TableName = "SessionData";
            });
            services.AddSession(options => {
                options.Cookie.Name = "Inventory.Session";
                options.IdleTimeout = System.TimeSpan.FromHours(24);
                options.Cookie.HttpOnly = false;
                options.Cookie.IsEssential = true;
            });
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, System.IServiceProvider services)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSession();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSwagger();
            app.UseSwaggerUI(options => {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "Lesenya Test API");
            });
            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
            SeedData.SeedDatabase(services.GetRequiredService<DataContext>());
            IdentitySeedData.SeedDataBase(services).Wait();
        }
    }
}
