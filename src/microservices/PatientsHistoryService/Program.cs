using DotNetEnv;
using Microsoft.Extensions.Options;
using PatientsHistoryService.Repositories;
using PatientsHistoryService.Settings;
using MongoDB.Bson;

var builder = WebApplication.CreateBuilder(args);

Env.Load();

// Add services to the container.
builder.Services.Configure<MongoDBSettings>(options =>
{
    options.ConnectionString = Env.GetString("MONGODB_CONNECTIONSTRING");
    options.DatabaseName = Env.GetString("MONGODB_DATABASENAME");
});

builder.Services.AddSingleton<PatientRepository>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Cors Config
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

// enable cors
app.UseCors("AllowAllOrigins");

app.MapControllers();

app.Run();
