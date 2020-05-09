﻿// <auto-generated />
using System;
using AngularDotnetInventoryDemo.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AngularDotnetInventoryDemo.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200508204336_ChangeDeleteBehavior")]
    partial class ChangeDeleteBehavior
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AngularDotnetInventoryDemo.Models.Product", b =>
                {
                    b.Property<long>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Category")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(8,2)");

                    b.Property<long?>("SupplierId")
                        .HasColumnType("bigint");

                    b.HasKey("ProductId");

                    b.HasIndex("SupplierId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("AngularDotnetInventoryDemo.Models.Supplier", b =>
                {
                    b.Property<long>("SupplierId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Surname")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SupplierId");

                    b.ToTable("Suppliers");
                });

            modelBuilder.Entity("AngularDotnetInventoryDemo.Models.Product", b =>
                {
                    b.HasOne("AngularDotnetInventoryDemo.Models.Supplier", "Supplier")
                        .WithMany("Products")
                        .HasForeignKey("SupplierId")
                        .OnDelete(DeleteBehavior.SetNull);
                });
#pragma warning restore 612, 618
        }
    }
}