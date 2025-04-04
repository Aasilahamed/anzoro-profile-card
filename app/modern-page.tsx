"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { 
  ArrowRight, 
  Nfc, 
  Sparkles, 
  BarChart3, 
  Users, 
  Smartphone, 
  Zap,
  CheckCircle2,
  Menu,
  X
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeaderModeToggle } from "@/components/header-mode-toggle"

export default function ModernHome() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Modern Header */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="bg-gradient-primary text-white p-1.5 rounded-lg">
              <Nfc className="h-5 w-5" />
            </div>
            <span className="text-gradient text-xl">Anzoro</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#ai-insights"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              AI Insights
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Testimonials
            </Link>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <HeaderModeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                Sign Up Free
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <HeaderModeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="container py-4 flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-sm font-medium py-2 text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#ai-insights"
                className="text-sm font-medium py-2 text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Insights
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium py-2 text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium py-2 text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="w-full bg-gradient-primary hover:opacity-90">
                    Sign Up Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-60"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
          </div>
          
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-foreground/80 mx-auto lg:mx-0 w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                  <span>Revolutionizing Professional Networking</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-gradient">AI-Powered</span> Digital <br />
                  Profile Cards with <br />
                  <span className="text-gradient">NFC Technology</span>
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                  Create stunning digital profiles, gain AI-driven career insights, and network seamlessly with Anzoro's innovative platform.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/signup">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 gap-2 w-full sm:w-auto">
                      Get Started Free <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#demo">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      View Demo
                    </Button>
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gradient">10k+</span>
                    <span className="text-sm text-muted-foreground">Active Users</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gradient">98%</span>
                    <span className="text-sm text-muted-foreground">Satisfaction</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gradient">24/7</span>
                    <span className="text-sm text-muted-foreground">Support</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="relative">
                <div className="relative z-10 mx-auto lg:ml-auto lg:mr-0 w-full max-w-md">
                  {/* Main Card */}
                  <div className="glass rounded-3xl shadow-xl overflow-hidden animate-float">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
                          <span className="text-white text-xl font-bold">JD</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">John Doe</h3>
                          <p className="text-sm text-foreground/70">Product Designer</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Smartphone className="h-4 w-4 text-primary" />
                          <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>john.doe@example.com</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground pt-1">
                          <span>Profile Strength</span>
                          <span>75%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-primary p-4 flex justify-between items-center">
                      <span className="text-white text-sm font-medium">Tap to connect</span>
                      <Nfc className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 glass rounded-xl p-3 shadow-lg animate-float-delay-1">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-emerald-500" />
                      <span className="text-sm font-medium">AI Insights Ready</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 shadow-lg animate-float-delay-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">+28% Profile Views</span>
                    </div>
                  </div>
                </div>
                
                {/* NFC Animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 -z-10">
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute inset-0 scale-[0.85] rounded-full border-4 border-primary/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
                  <div className="absolute inset-0 scale-[0.7] rounded-full border-4 border-primary/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trusted By Section */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
              <div className="h-8 w-auto">
                <svg className="h-full w-auto text-foreground/70" viewBox="0 0 124 34" fill="currentColor">
                  <path d="M11.5 3.205C5.4 3.205.5 8.105.5 14.205c0 6.1 4.9 11 11 11 6.1 0 11-4.9 11-11 0-6.1-4.9-11-11-11zm4.5 13.2h-3.6v3.6c0 .5-.4.9-.9.9-.5 0-.9-.4-.9-.9v-3.6H7c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9h3.6V11c0-.5.4-.9.9-.9.5 0 .9.4.9.9v3.6h3.6c.5 0 .9.4.9.9 0 .5-.4.9-.9.9zM35.8 7.605c-3.5 0-6.3 2.8-6.3 6.3v14.4c0 .5.4.9.9.9.5 0 .9-.4.9-.9v-7.2h9v7.2c0 .5.4.9.9.9.5 0 .9-.4.9-.9v-14.4c0-3.5-2.8-6.3-6.3-6.3zm4.5 11.7h-9v-5.4c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v5.4zM53.3 7.605c-3.5 0-6.3 2.8-6.3 6.3v14.4c0 .5.4.9.9.9.5 0 .9-.4.9-.9v-14.4c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v14.4c0 .5.4.9.9.9.5 0 .9-.4.9-.9v-14.4c0-3.5-2.8-6.3-6.3-6.3zM79.3 7.605c-3.5 0-6.3 2.8-6.3 6.3v8.1c0 3.5 2.8 6.3 6.3 6.3s6.3-2.8 6.3-6.3v-8.1c0-3.5-2.8-6.3-6.3-6.3zm4.5 14.4c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5v-8.1c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v8.1zM106.3 7.605c-3.5 0-6.3 2.8-6.3 6.3v8.1c0 3.5 2.8 6.3 6.3 6.3 1.7 0 3.2-.7 4.4-1.8.4-.4.4-1 0-1.3-.4-.4-1-.4-1.3 0-.8.8-1.9 1.3-3.1 1.3-2.5 0-4.5-2-4.5-4.5v-8.1c0-2.5 2-4.5 4.5-4.5 1.2 0 2.3.5 3.1 1.3.4.4 1 .4 1.3 0 .4-.4.4-1 0-1.3-1.2-1.1-2.7-1.8-4.4-1.8zM123.5 7.605h-9c-.5 0-.9.4-.9.9 0 .5.4.9.9.9h3.6v18.9c0 .5.4.9.9.9.5 0 .9-.4.9-.9v-18.9h3.6c.5 0 .9-.4.9-.9 0-.5-.4-.9-.9-.9z" />
                </svg>
              </div>
              <div className="h-8 w-auto">
                <svg className="h-full w-auto text-foreground/70" viewBox="0 0 124 34" fill="currentColor">
                  <path d="M41.311 17.393l-2.273-2.273a.952.952 0 00-1.345 0l-12.204 12.204V9.982c0-.527-.429-.955-.955-.955H22.08a.955.955 0 00-.955.955v17.342L8.921 15.12a.952.952 0 00-1.345 0l-2.273 2.273a.952.952 0 000 1.345l15.334 15.334a.952.952 0 001.345 0l19.329-19.329a.952.952 0 000-1.35zM62.727 5.705h-8.593c-3.110 0-5.705 2.595-5.705 5.705v17.114c0 3.110 2.595 5.705 5.705 5.705h8.593c3.110 0 5.705-2.595 5.705-5.705V11.41c0-3.11-2.595-5.705-5.705-5.705zm1.901 22.819c0 1.037-.865 1.901-1.901 1.901h-8.593c-1.037 0-1.901-.865-1.901-1.901V11.41c0-1.037.865-1.901 1.901-1.901h8.593c1.037 0 1.901.865 1.901 1.901v17.114zM87.659 5.705h-8.593c-3.11 0-5.705 2.595-5.705 5.705v17.114c0 3.11 2.595 5.705 5.705 5.705h8.593c3.11 0 5.705-2.595 5.705-5.705V11.41c0-3.11-2.595-5.705-5.705-5.705zm1.901 22.819c0 1.037-.865 1.901-1.901 1.901h-8.593c-1.037 0-1.901-.865-1.901-1.901V11.41c0-1.037.865-1.901 1.901-1.901h8.593c1.037 0 1.901.865 1.901 1.901v17.114zM112.591 5.705h-8.593c-3.11 0-5.705 2.595-5.705 5.705v17.114c0 3.11 2.595 5.705 5.705 5.705h8.593c3.11 0 5.705-2.595 5.705-5.705V11.41c0-3.11-2.595-5.705-5.705-5.705zm1.901 22.819c0 1.037-.865 1.901-1.901 1.901h-8.593c-1.037 0-1.901-.865-1.901-1.901V11.41c0-1.037.865-1.901 1.901-1.901h8.593c1.037 0 1.901.865 1.901 1.901v17.114z" />
                </svg>
              </div>
              <div className="h-8 w-auto">
                <svg className="h-full w-auto text-foreground/70" viewBox="0 0 124 34" fill="currentColor">
                  <path d="M24.707 19.475c0 1.982-1.602 3.585-3.585 3.585s-3.585-1.602-3.585-3.585 1.602-3.585 3.585-3.585 3.585 1.602 3.585 3.585zM40.585 19.475c0 1.982-1.602 3.585-3.585 3.585s-3.585-1.602-3.585-3.585 1.602-3.585 3.585-3.585 3.585 1.602 3.585 3.585zM16.537 19.475c0-2.531 1.121-4.803 2.896-6.351-1.263-1.288-2.887-2.161-4.675-2.374-1.92-.229-3.839.501-5.276 1.908-1.436 1.407-2.154 3.331-1.908 5.251.229 1.788 1.102 3.412 2.39 4.675 1.548-1.775 3.82-2.896 6.351-2.896.075 0 .149.003.223.008v-.221zM21.122 8.878c3.839 0 7.171 2.168 8.841 5.347a9.861 9.861 0 014.452-1.059c.075 0 .149.003.223.008v-.221c0-6.628-5.372-12-12-12s-12 5.372-12 12c0 .075.003.149.008.223h.221c2.531 0 4.803 1.121 6.351 2.896 1.548-1.775 3.82-2.896 6.351-2.896.075 0 .149.003.223.008v-.221c0-.075-.003-.149-.008-.223.074.005.148.008.223.008.075 0 .149-.003.223-.008-.005.074-.008.148-.008.223v.221c.074-.005.148-.008.223-.008 1.982 0 3.585 1.602 3.585 3.585s-1.602 3.585-3.585 3.585c-.075 0-.149-.003-.223-.008v.221c0 .075.003.149.008.223-.074-.005-.148-.008-.223-.008-.075 0-.149.003-.223.008.005-.074.008-.148.008-.223v-.221c-.074.005-.148.008-.223.008-1.982 0-3.585-1.602-3.585-3.585s1.602-3.585 3.585-3.585c.075 0 .149.003.223.008v-.221c0-.075-.003-.149-.008-.223.074.005.148.008.223.008zM37 14.174c-2.531 0-4.803 1.121-6.351 2.896 1.548 1.775 2.896 4.047 2.896 6.578 0 .075-.003.149-.008.223h.221c6.628 0 12-5.372 12-12 0-.075-.003-.149-.008-.223h-.221c-2.531 0-4.803 1.121-6.351 2.896a9.827 9.827 0 00-1.955-1.059c-.075 0-.149.003-.223.008v-.221c0-.075.003-.149.008-.223-.074.005-.148.008-.223.008-.075 0-.149-.003-.223-.008.005.074.008.148.008.223v.221c.074-.005.148-.008.223-.008.075 0 .149.003.223.008-.005-.074-.008-.148-.008-.223v-.221c-.074.005-.148.008-.223.008zM21.122 30.071c-3.839 0-7.171-2.168-8.841-5.347a9.827 9.827 0 01-1.955 1.059c-.075 0-.149-.003-.223-.008v.221c0 6.628 5.372 12 12 12s12-5.372 12-12c0-.075-.003-.149-.008-.223h-.221c-2.531 0-4.803-1.121-6.351-2.896-1.548 1.775-3.82 2.896-6.351 2.896-.075 0-.149-.003-.223-.008v.221c0 .075.003.149.008.223-.074-.005-.148-.008-.223-.008-.075 0-.149.003-.223.008.005-.074.008-.148.008-.223v-.221c-.074.005-.148.008-.223.008zM8.878 24.707c2.531 0 4.803-1.121 6.351-2.896-1.775-1.548-2.896-3.82-2.896-6.351 0-.075.003-.149.008-.223h-.221c-6.628 0-12 5.372-12 12 0 .075.003.149.008.223h.221c2.531 0 4.803-1.121 6.351-2.896 1.263 1.288 2.887 2.161 4.675 2.374.075 0 .149-.003.223-.008v.221c0 .075-.003.149-.008.223.074-.005.148-.008.223-.008.075 0 .149.003.223.008-.005-.074-.008-.148-.008-.223v-.221c-.074.005-.148.008-.223.008zM63.441 8.878h2.521v16.244h-2.521V8.878zM68.337 14.174h2.521v10.948h-2.521V14.174zM73.233 17.695h2.521v7.427h-2.521v-7.427zM83.025 14.174h2.521v2.521h-2.521v-2.521zM83.025 17.695h2.521v7.427h-2.521v-7.427zM90.452 14.174h7.564v2.521h-5.043v2.521h5.043v2.521h-5.043v3.385h-2.521V14.174zM100.244 14.174h7.564v2.521h-5.043v2.521h5.043v2.521h-5.043v3.385h-2.521V14.174zM110.036 14.174h7.564v2.521h-5.043v2.521h5.043v2.521h-5.043v3.385h-2.521V14.174z" />
                </svg>
              </div>
              <div className="h-8 w-auto">
                <svg className="h-full w-auto text-foreground/70" viewBox="0 0 124 34" fill="currentColor">
                  <path d="M36.687 11.169c-2.208 0-4.416.736-6.624 2.208v-2.208h-6.624v22.08h6.624V22.017c0-3.68 2.208-4.416 4.416-4.416s4.416.736 4.416 4.416v11.232h6.624V22.017c0-7.36-4.416-10.848-8.832-10.848zM17.119 11.169h-6.624v22.08h6.624v-22.08zM13.807.321c-2.208 0-3.68 1.472-3.68 3.68s1.472 3.68 3.68 3.68 3.68-1.472 3.68-3.68-1.472-3.68-3.68-3.68zM114.323 11.169c-2.208 0-4.416.736-6.624 2.208v-2.208h-6.624v22.08h6.624V22.017c0-3.68 2.208-4.416 4.416-4.416s4.416.736 4.416 4.416v11.232h6.624V22.017c0-7.36-4.416-10.848-8.832-10.848zM94.755 11.169h-6.624v22.08h6.624v-22.08zM91.443.321c-2.208 0-3.68 1.472-3.68 3.68s1.472 3.68 3.68 3.68 3.68-1.472 3.68-3.68-1.472-3.68-3.68-3.68zM79.875 11.169c-6.624 0-11.776 5.152-11.776 11.776s5.152 11.776 11.776 11.776S91.651 29.569 91.651 22.945s-5.152-11.776-11.776-11.776zm0 17.664c-3.68 0-5.888-2.944-5.888-5.888s2.208-5.888 5.888-5.888 5.888 2.944 5.888 5.888-2.208 5.888-5.888 5.888zM59.571 11.169c-6.624 0-11.776 5.152-11.776 11.776s5.152 11.776 11.776 11.776 11.776-5.152 11.776-11.776-5.152-11.776-11.776-11.776zm0 17.664c-3.68 0-5.888-2.944-5.888-5.888s2.208-5.888 5.888-5.888 5.888 2.944 5.888 5.888-2.208 5.888-5.888 5.888z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20 md:py-32">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <Sparkles className="h-4 w-4" />
                <span>Powerful Features</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Everything You Need for <span className="text-gradient">Professional Networking</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Our platform combines cutting-edge technology with intuitive design to create a seamless networking experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group relative bg-background rounded-xl border p-6 hover:shadow-md transition-all">
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
                  <Nfc className="h-5 w-5 text-white" />
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-2">NFC Digital Profiles</h3>
                  <p className="text-muted-foreground mb-4">
                    Create beautiful digital profiles that can be shared instantly with a tap of your NFC-enabled card.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Customizable templates</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>One-tap sharing</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Real-time updates</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="group relative bg-background rounded-xl border p-6 hover:shadow-md transition-all">
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-secondary flex items-center justify-center shadow-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-2">AI Career Insights</h3>
                  <p className="text-muted-foreground mb-4">
                    Leverage AI-powered analytics to gain valuable insights about your professional network and career opportunities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Personalized recommendations</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Skill gap analysis</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Industry trend reports</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="group relative bg-background rounded-xl border p-6 hover:shadow-md transition-all">
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-accent to-purple-500 flex items-center justify-center shadow-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                  <p className="text-muted-foreground mb-4">
                    Track your networking performance with detailed analytics on profile views, connections, and engagement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Real-time statistics</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Engagement metrics</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Performance reports</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="group relative bg-background rounded-xl border p-6 hover:shadow-md transition-all">
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Seamless Networking</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with professionals in your industry and expand your network with our intuitive platform.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Smart connections</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Event integration</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Follow-up reminders</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Feature 5 */}
              <div className="group relative bg-background rounded-xl border p-6 hover:shadow-md transition-all">
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Mobile Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Access your profile and connections on the go with our mobile app for iOS and Android.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Cross-platform sync</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Offline access</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Push notifications</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Feature 6 */}
              <div className="group relative bg-background rounded-xl border p-6 hover:shadow-md transition-all">
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Instant Updates</h3>
                  <p className="text-muted-foreground mb-4">
                    Keep your profile current with real-time updates that sync across all your devices and cards.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Cloud synchronization</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Version history</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Scheduled updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Insights Section */}
        <section id="ai-insights" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
          </div>
          
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary mb-4">
                  <Sparkles className="h-4 w-4" />
                  <span>AI-Powered Insights</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Unlock Your Career Potential with <span className="text-gradient">AI-Driven Insights</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Our advanced AI analyzes your profile, connections, and industry trends to provide personalized recommendations for career growth and networking opportunities.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Skill Gap Analysis</h3>
                      <p className="text-muted-foreground">
                        Identify skills you need to develop to advance in your career path based on industry demands.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Network Recommendations</h3>
                      <p className="text-muted-foreground">
                        Get suggestions for valuable connections based on your career goals and current network.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Industry Trend Reports</h3>
                      <p className="text-muted-foreground">
                        Stay ahead with personalized reports on emerging trends and opportunities in your field.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/signup">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 gap-2 w-full sm:w-auto">
                      Try AI Insights <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#demo">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Image/Visualization */}
              <div className="relative">
                <div className="glass rounded-xl overflow-hidden shadow-xl">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold">Career Insights Dashboard</h3>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Skill Analysis */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Skill Analysis</h4>
                          <span className="text-xs text-muted-foreground">Updated today</span>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Leadership</span>
                              <span>85%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-primary w-[85%] rounded-full"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Technical Skills</span>
                              <span>92%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-secondary w-[92%] rounded-full"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Communication</span>
                              <span>78%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-accent w-[78%] rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Recommended Connections */}
                      <div>
                        <h4 className="font-medium mb-3">Recommended Connections</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                              SA
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">Sarah Anderson</p>
                              <p className="text-xs text-muted-foreground">Product Manager at TechCorp</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-medium">
                              MJ
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">Michael Johnson</p>
                              <p className="text-xs text-muted-foreground">Senior Developer at InnoSoft</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Industry Trends */}
                      <div>
                        <h4 className="font-medium mb-3">Industry Trends</h4>
                        <div className="flex gap-2 flex-wrap">
                          <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            AI Integration
                          </div>
                          <div className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                            Remote Work
                          </div>
                          <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                            Blockchain
                          </div>
                          <div className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                            Sustainability
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 glass rounded-xl p-3 shadow-lg animate-float-delay-1">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium">Career Score: 92/100</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 shadow-lg animate-float-delay-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">3 New Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <Zap className="h-4 w-4" />
                <span>Simple Pricing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Choose the Perfect Plan for Your <span className="text-gradient">Networking Needs</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                No hidden fees or complicated tiers. Just straightforward pricing for professionals at every stage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="relative bg-background rounded-xl border p-6 hover:shadow-md transition-all flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Free</h3>
                  <p className="text-muted-foreground text-sm mt-1">Perfect for getting started</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>1 Digital Profile Card</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Basic Templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Digital Sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Basic Analytics</span>
                  </li>
                </ul>
                
                <Link href="/signup" className="w-full">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </div>
              
              {/* Pro Plan */}
              <div className="relative bg-background rounded-xl border-2 border-primary p-6 shadow-lg flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                
                <div className="mb-4 pt-2">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="text-muted-foreground text-sm mt-1">For serious networkers</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>5 Digital Profile Cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Premium Templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>NFC Card Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Advanced Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Basic AI Insights</span>
                  </li>
                </ul>
                
                <Link href="/signup" className="w-full">
                  <Button className="w-full bg-gradient-primary hover:opacity-90">Get Started</Button>
                </Link>
              </div>
              
              {/* Business Plan */}
              <div className="relative bg-background rounded-xl border p-6 hover:shadow-md transition-all flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Business</h3>
                  <p className="text-muted-foreground text-sm mt-1">For teams and organizations</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">$24.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Unlimited Digital Profile Cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom Branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Team Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Full Analytics Suite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Advanced AI Insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Priority Support</span>
                  </li>
                </ul>
                
                <Link href="/signup" className="w-full">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Ready to Transform Your <span className="text-gradient">Professional Networking</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of professionals who are already using Anzoro to advance their careers and build meaningful connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 gap-2 w-full sm:w-auto">
                    Get Started Free <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-muted/30 border-t py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 font-bold mb-4">
                <div className="bg-gradient-primary text-white p-1.5 rounded-lg">
                  <Nfc className="h-5 w-5" />
                </div>
                <span className="text-gradient text-xl">Anzoro</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Revolutionizing professional networking with NFC technology and AI-driven insights.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.992 18.166c-.227.061-.463.109-.7.146a.91.91 0 01-.205.021c-.195 0-.375-.113-.459-.3a9.37 9.37 0 01-.276-.74 10.931 10.931 0 01-.244-.789c-.016-.057-.032-.113-.05-.17l-.039-.126a.834.834 0 00-.767-.579h-.017a.83.83 0 00-.752.529c-.229.64-.5 1.268-.806 1.881a.5.5 0 01-.908-.417c.258-.563.492-1.139.696-1.723h-.694a.5.5 0 010-1h1.1c.099-.33.187-.664.258-1h-.858a.5.5 0 010-1h1.064c.077-.513.117-1.032.117-1.553 0-2.761-1.122-5.263-2.932-7.071l.147-.147a.5.5 0 11.707.707l-.146.146A10.95 10.95 0 0123 12c0 1.321-.234 2.591-.667 3.766.407.291.667.767.667 1.3 0 .586-.324 1.104-.829 1.376-.325.176-.702.26-1.078.26-.66 0-1.298-.271-1.764-.738a.5.5 0 01.707-.707c.285.284.666.445 1.057.445.229 0 .452-.05.651-.156.24-.13.256-.407.256-.48 0-.211-.08-.346-.145-.407-.224-.211-.578-.217-.842-.028-.212.152-.483.152-.694 0-.212-.152-.302-.422-.226-.67.016-.053.033-.106.05-.158.069-.215.143-.427.221-.637-1.122 1.35-2.796 2.211-4.67 2.211-.67 0-1.318-.106-1.93-.299a.5.5 0 01.307-.951c.526.17 1.081.25 1.623.25 1.602 0 3.043-.788 4.013-1.974-.1.008-.2.016-.301.022-.189.013-.38.019-.57.019-1.8 0-3.526-.625-4.921-1.766a.5.5 0 01.619-.788c1.185.93 2.72 1.554 4.302 1.554.161 0 .322-.005.482-.015 2.2-.138 4.118-1.177 5.363-2.77a10.938 10.938 0 00.831-1.208c.046-.078.09-.156.134-.235.169-.306.328-.618.475-.937.08-.175.156-.353.227-.533.028-.072.056-.144.083-.217.064-.175.124-.352.18-.53.026-.082.051-.165.075-.248.06-.207.115-.417.165-.629.014-.06.027-.121.04-.182.055-.265.103-.532.141-.803.008-.055.016-.11.023-.166.038-.31.067-.623.086-.94.004-.066.008-.132.011-.198.016-.347.024-.696.024-1.047 0-2.76-1.122-5.263-2.932-7.071l.147-.147a.5.5 0 01.707.707l-.146.146A10.95 10.95 0 0123 12c0 1.321-.234 2.591-.667 3.766.407.291.667.767.667 1.3 0 .586-.324 1.104-.829 1.376-.325.176-.702.26-1.078.26-.66 0-1.298-.271-1.764-.738a.5.5 0 01.707-.707c.285.284.666.445 1.057.445.229 0 .452-.05.651-.156.24-.13.256-.407.256-.48 0-.211-.08-.346-.145-.407-.224-.211-.578-.217-.842-.028-.212.152-.483.152-.694 0-.212-.152-.302-.422-.226-.67.016-.053.033-.106.05-.158.069-.215.143-.427.221-.637-1.122 1.35-2.796 2.211-4.67 2.211-.67 0-1.318-.106-1.93-.299a.5.5 0 01.307-.951c.526.17 1.081.25 1.623.25 1.602 0 3.043-.788 4.013-1.974-.1.008-.2.016-.301.022-.189.013-.38.019-.57.019-1.8 0-3.526-.625-4.921-1.766a.5.5 0 01.619-.788c1.185.93 2.72 1.554 4.302 1.554.161 0 .322-.005.482-.015 2.2-.138 4.118-1.177 5.363-2.77a10.938 10.938 0 00.831-1.208z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">AI Insights</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">NFC Cards</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Templates</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Support Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Anzoro. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface PlusProps {
  className?: string
}

function Plus({ className }: PlusProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}